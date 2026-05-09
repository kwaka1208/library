#!/bin/bash

# checkdns.sh - DNS Record Checker using 'dig'
# Usage: ./checkdns.sh <domain> [selector] [-g] [-s <server>]

DOMAIN=""
SELECTOR=""
USE_GOOGLE=0
CUSTOM_SERVER=""

# Colors for output
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GRAY='\033[0;90m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if 'dig' is installed
if ! command -v dig &> /dev/null; then
    echo -e "${RED}【エラー】'dig' コマンドが見つかりません。dnsutils または bind9-host をインストールしてください。${NC}"
    exit 1
fi

# Parse arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        -g)
            USE_GOOGLE=1
            shift
            ;;
        -s)
            CUSTOM_SERVER="$2"
            shift 2
            ;;
        -*)
            echo -e "${RED}【エラー】不明なオプション: $1${NC}"
            exit 1
            ;;
        *)
            if [ -z "$DOMAIN" ]; then
                DOMAIN="$1"
            elif [ -z "$SELECTOR" ]; then
                SELECTOR="$1"
            fi
            shift
            ;;
    esac
done

# Error handling for missing domain
if [ -z "$DOMAIN" ]; then
    echo -e "${RED}【エラー】ドメイン名が指定されていません。${NC}"
    echo "使用方法: $0 <ドメイン名> [DKIMセレクタ名] [-g] [-s <IP>]"
    echo "実行例: $0 example.com -g"
    exit 1
fi

# Determine DNS server
TARGET_DNS=""
DNS_LABEL="システムのデフォルトDNS"

if [ -n "$CUSTOM_SERVER" ]; then
    TARGET_DNS="@$CUSTOM_SERVER"
    DNS_LABEL="指定されたDNS ($CUSTOM_SERVER)"
elif [ "$USE_GOOGLE" -eq 1 ]; then
    TARGET_DNS="@8.8.8.8"
    DNS_LABEL="Google Public DNS (8.8.8.8)"
fi

echo -e "${CYAN}=============================================="
echo " 対象ドメイン: $DOMAIN"
echo " 参照DNS: $DNS_LABEL"
echo -e "==============================================${NC}"
echo ""

# Function to run dig and format output
run_dig() {
    local type=$1
    local query=$2
    local result

    # Run dig with +short
    if [ -n "$TARGET_DNS" ]; then
        result=$(dig $TARGET_DNS "$query" "$type" +short)
    else
        result=$(dig "$query" "$type" +short)
    fi

    if [ -z "$result" ]; then
        echo -e "${GRAY}  (レコードが見つかりません)${NC}"
    else
        # indent results
        echo "$result" | sed 's/^/  /'
    fi
}

echo -e "${YELLOW}=== 1. Aレコード（Webサイトの接続先） ===${NC}"
run_dig "A" "$DOMAIN"
echo ""

echo -e "${YELLOW}=== 2. MXレコード（メールの配送先） ===${NC}"
run_dig "MX" "$DOMAIN"
echo ""

echo -e "${YELLOW}=== 3. TXTレコード（SPFや所有権証明など） ===${NC}"
run_dig "TXT" "$DOMAIN"
echo ""

echo -e "${YELLOW}=== 4. DMARCレコード（なりすまし対策） ===${NC}"
run_dig "TXT" "_dmarc.$DOMAIN"
echo ""

echo -e "${YELLOW}=== 5. DKIMレコード ===${NC}"
if [ -n "$SELECTOR" ]; then
    run_dig "TXT" "${SELECTOR}._domainkey.$DOMAIN"
else
    echo -e "${GRAY}※ DKIMセレクタ名が指定されていないためスキップしました。${NC}"
    echo "   例: $0 $DOMAIN google"
fi
echo ""

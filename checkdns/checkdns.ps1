<#
.SYNOPSIS
    ドメインの主要なDNSレコード（A, MX, TXT, DMARC, DKIM）を確認するスクリプト。

.DESCRIPTION
    指定されたドメインに対して、メール設定に必要な一連のDNSレコードを取得して表示します。
    参照するDNSサーバーをシステムのデフォルト、Google Public DNS、または任意のIPアドレスから選択可能です。

.EXAMPLE
    .\checkdns.ps1 example.com
    システムのデフォルトDNSを使用して example.com のレコードを確認します。

.EXAMPLE
    .\checkdns.ps1 example.com google -g
    Google Public DNSを使用して example.com のレコードを確認し、セレクタ名 'google' でDKIMレコードも確認します。
#>

param (
    [Parameter(Position = 0, Mandatory = $true)]
    [string]$Domain,

    [Parameter(Position = 1)]
    [string]$Selector,

    # Google Public DNS (8.8.8.8) を使用するためのスイッチ
    [Alias('g')]
    [switch]$Google,

    # 任意のDNSサーバーを指定するためのパラメータ
    [Alias('s')]
    [string]$Server
)

# 使用するDNSサーバーの判定
$targetDns = $null
$dnsLabel = "システムのデフォルトDNS"

if (-not [string]::IsNullOrWhiteSpace($Server)) {
    $targetDns = $Server
    $dnsLabel  = "指定されたDNS ($Server)"
} elseif ($Google) {
    $targetDns = "8.8.8.8"
    $dnsLabel  = "Google Public DNS (8.8.8.8)"
}

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host " 対象ドメイン: $Domain"
Write-Host " 参照DNS: $dnsLabel"
Write-Host "=============================================="
Write-Host ""

# 共通処理関数：DNSを引いて表示する
function Get-MyDnsRecord {
    param (
        [string]$Name,
        [string]$Type
    )

    # Resolve-DnsName に渡すパラメータ
    $resolveArgs = @{
        Name        = $Name
        Type        = $Type
        ErrorAction = 'SilentlyContinue'
    }

    # ターゲットDNSが指定されている場合のみ -Server パラメータを追加
    if ($targetDns) {
        $resolveArgs.Server = $targetDns
    }

    # コマンドを実行
    $records = Resolve-DnsName @resolveArgs

    if (-not $records) {
        Write-Host "  (レコードが見つかりません)" -ForegroundColor DarkGray
        return
    }

    # TXTレコードの場合は文字列だけを抽出し、それ以外は標準のテーブル形式で表示
    if ($Type -eq "TXT") {
        $records | ForEach-Object {
            foreach ($s in $_.Strings) {
                Write-Host "  $s"
            }
        }
    } else {
        $records | Select-Object Name, Type, TTL, Section, @{Name="IP/Target/Value"; Expression={
            if ($_.IPAddress) { $_.IPAddress }
            elseif ($_.NameExchange) { $_.NameExchange }
            else { $_.Strings -join " " }
        }} | Format-Table -AutoSize
    }
}

Write-Host "=== 1. Aレコード（Webサイトの接続先） ===" -ForegroundColor Yellow
Get-MyDnsRecord -Name $Domain -Type A
Write-Host ""

Write-Host "=== 2. MXレコード（メールの配送先） ===" -ForegroundColor Yellow
Get-MyDnsRecord -Name $Domain -Type MX
Write-Host ""

Write-Host "=== 3. TXTレコード（SPFや所有権証明など） ===" -ForegroundColor Yellow
Get-MyDnsRecord -Name $Domain -Type TXT
Write-Host ""

Write-Host "=== 4. DMARCレコード（なりすまし対策） ===" -ForegroundColor Yellow
Get-MyDnsRecord -Name "_dmarc.$Domain" -Type TXT
Write-Host ""

Write-Host "=== 5. DKIMレコード ===" -ForegroundColor Yellow
if (-not [string]::IsNullOrWhiteSpace($Selector)) {
    Get-MyDnsRecord -Name "${Selector}._domainkey.${Domain}" -Type TXT
} else {
    Write-Host "※ DKIMセレクタ名が指定されていないためスキップしました。"
    Write-Host "   例: .\checkdns.ps1 $Domain google"
}
Write-Host ""

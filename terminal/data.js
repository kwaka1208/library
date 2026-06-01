export const terminalData = {
  bash: [
    {
      command: "pwd",
      name: "現在位置の確認",
      en: "Print Working Directory",
      description: "現在自分が作業しているディレクトリ（フォルダ）の場所をフルパスで表示します。",
      example: "pwd",
      note: "迷子になったらまずこれを打ちましょう。"
    },
    {
      command: "ls",
      name: "ファイル一覧の表示",
      en: "List",
      description: "現在のディレクトリ内にあるファイルやフォルダの一覧を表示します。",
      example: "ls",
      note: "ls -l と打つと詳細が、ls -a と打つと隠しファイルも見ることができます。"
    },
    {
      command: "cd [ディレクトリ名]",
      name: "ディレクトリの移動",
      en: "Change Directory",
      description: "指定したディレクトリに移動します。",
      example: "cd Documents",
      note: "cd .. で一つ上の階層に戻れます。cd だけ打つとホームディレクトリに戻ります。"
    },
    {
      command: "mkdir [フォルダ名]",
      name: "フォルダの作成",
      en: "Make Directory",
      description: "新しいディレクトリ（フォルダ）を作成します。",
      example: "mkdir new-project",
      note: "複数の名前を並べて一度に作ることもできます。"
    },
    {
      command: "touch [ファイル名]",
      name: "ファイルの作成",
      en: "Touch",
      description: "空のファイルを作成します。すでにファイルがある場合は更新日時を最新にします。",
      example: "touch index.html",
      note: "中身を空にしてファイルだけ用意したい時に便利です。"
    },
    {
      command: "rm [ファイル名]",
      name: "ファイルの削除",
      en: "Remove",
      description: "指定したファイルを削除します。",
      example: "rm old-file.txt",
      note: "ゴミ箱に入らず完全に消えるので注意！ フォルダを消す時は rm -r [フォルダ名] とします。"
    },
    {
      command: "mv [移動元] [移動先]",
      name: "移動・名前変更",
      en: "Move",
      description: "ファイルを移動させたり、名前を変更したりします。",
      example: "mv file.txt blog/ (移動) <br> mv old.txt new.txt (名前変更)",
      note: "移動先を新しい名前にすることで、名前変更として使われます。"
    },
    {
      command: "cp [コピー元] [コピー先]",
      name: "コピー",
      en: "Copy",
      description: "ファイルやフォルダをコピーします。",
      example: "cp config.js config.backup.js",
      note: "フォルダごとコピーする場合は cp -r を使います。"
    },
    {
      command: "clear",
      name: "画面をきれいにする",
      en: "Clear",
      description: "ターミナルの表示をクリアして、一番上の行から表示されるようにします。",
      example: "clear",
      note: "画面がコマンドでいっぱいになって見づらくなった時に使います。"
    },
    {
      command: "cat [ファイル名]",
      name: "中身の表示",
      en: "Concatenate",
      description: "ファイルの中身をターミナル上に表示します。",
      example: "cat README.md",
      note: "短いファイルの中身をさっと確認したい時に便利です。"
    },
    {
      command: "[Tab] キー",
      name: "名前の補完",
      en: "Tab Completion",
      description: "ファイル名やフォルダ名の最初の数文字を打って Tab キーを押すと、残りの名前を自動入力してくれます。",
      example: "cd Docu [Tab] → cd Documents/",
      note: "打ち間違いを防げるので、一番よく使う機能です！"
    },
    {
      command: "[↑] [↓] キー",
      name: "コマンドの履歴",
      en: "Command History",
      description: "キーボードの上下矢印キーを押すと、以前に打ったコマンドを呼び出せます。",
      example: "（上キーを1回押す）→ 直前のコマンドを表示",
      note: "同じコマンドを何度も打ちたい時に便利です。"
    },
  ],
  powershell: [
    {
      command: "pwd",
      name: "現在位置の確認",
      en: "Print Working Directory",
      description: "現在自分が作業しているディレクトリ（フォルダ）の場所をフルパスで表示します。",
      example: "pwd",
      note: "PowerShellでは Get-Location コマンドの別名（エイリアス）です。"
    },
    {
      command: "ls",
      name: "ファイル一覧の表示",
      en: "List",
      description: "現在のディレクトリ内にあるファイルやフォルダの一覧を表示します。",
      example: "ls",
      note: "Get-ChildItem の別名です。隠しファイルを見るには ls -Force と打ちます。"
    },
    {
      command: "cd [ディレクトリ名]",
      name: "ディレクトリの移動",
      en: "Change Directory",
      description: "指定したディレクトリに移動します。",
      example: "cd Documents",
      note: "Set-Location の別名です。cd .. で戻る、cd でホームに戻る挙動は同じです。"
    },
    {
      command: "mkdir [フォルダ名]",
      name: "フォルダの作成",
      en: "Make Directory",
      description: "新しいディレクトリ（フォルダ）を作成します。",
      example: "mkdir new-project",
      note: "New-Item -ItemType Directory の短縮形として機能します。"
    },
    {
      command: "ni [ファイル名]",
      name: "ファイルの作成",
      en: "New Item",
      description: "新しいファイルを作成します。PowerShellには touch コマンドがないためこれを使います。",
      example: "ni index.html",
      note: "ni は New-Item の別名です。"
    },
    {
      command: "rm [ファイル名]",
      name: "ファイルの削除",
      en: "Remove",
      description: "指定したファイルを削除します。",
      example: "rm old-file.txt",
      note: "Remove-Item の別名です。フォルダを消す時は rm -Recurse [フォルダ名] とします。"
    },
    {
      command: "mv [移動元] [移動先]",
      name: "移動・名前変更",
      en: "Move",
      description: "ファイルを移動させたり、名前を変更したりします。",
      example: "mv file.txt blog\\ (移動) <br> mv old.txt new.txt (名前変更)",
      note: "Move-Item の別名です。Windowsではパスの区切りに \\ (円記号) を使います。"
    },
    {
      command: "cp [コピー元] [コピー先]",
      name: "コピー",
      en: "Copy",
      description: "ファイルやフォルダをコピーします。",
      example: "cp config.js config.backup.js",
      note: "Copy-Item の別名です。フォルダごとコピーする場合は cp -Recurse を使います。"
    },
    {
      command: "cls",
      name: "画面をきれいにする",
      en: "Clear Screen",
      description: "ターミナルの表示をクリアします。",
      example: "cls",
      note: "clear も使えますが、伝統的に Windows では cls がよく使われます。"
    },
    {
      command: "cat [ファイル名]",
      name: "中身の表示",
      en: "Concatenate",
      description: "ファイルの中身を表示します。",
      example: "cat README.md",
      note: "Get-Content の別名です。"
    },
    {
      command: "[Tab] キー",
      name: "名前の補完",
      en: "Tab Completion",
      description: "ファイル名やフォルダ名を補完します。PowerShellでは、Tabを押すごとに候補が切り替わります。",
      example: "cd Docu [Tab]",
      note: "Windowsの複雑なフォルダ名も簡単に打てます。"
    },
    {
      command: "[↑] [↓] キー",
      name: "コマンドの履歴",
      en: "Command History",
      description: "以前に実行したコマンドを呼び出せます。",
      example: "（上キーを数回押す）→ 過去のコマンドを遡る",
      note: "一度打った長いコマンドを再利用するのに必須の機能です。"
    },
  ]
};

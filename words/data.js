export const wordsData = [
  {
    word: "width",
    reading: "ウィズ / ウィドス",
    meaning: "幅、広さ",
    usage: "要素の「横幅」を指定。",
  },
  {
    word: "height",
    reading: "ハイト",
    meaning: "高さ",
    usage:
      "要素の「縦幅・高さ」を指定。「ヘイト」と読み間違えられやすい。",
  },
  {
    word: "align",
    reading: "アライン",
    meaning: "整列させる",
    usage: "配置（左寄せなど）を指定。「アリグン」と読み間違えやすい。",
  },
  {
    word: "opacity",
    reading: "オパシティ",
    meaning: "不透明、不透明度",
    usage: "要素の透明度を指定する。「オパチティ」と読み間違えやすい。",
  },
  {
    word: "pseudo",
    reading: "スード / スードゥ",
    meaning: "疑似の、見せかけの",
    usage:
      "CSSの pseudo-class（疑似クラス）などで登場。「プセウド」ではない。",
  },
  {
    word: "cache",
    reading: "キャッシュ",
    meaning: "隠し場所",
    usage:
      "データを一時保存して次回素早く読み込む仕組み。「カチェ」ではない。",
  },
  {
    word: "null",
    reading: "ヌル / ナル",
    meaning: "何もない",
    usage: "「値が存在しない」ことを明示する特別な値。",
  },
  {
    word: "boolean",
    reading: "ブーリアン",
    meaning: "ブール代数の",
    usage: "「真(true)」か「偽(false)」の2つの状態のみを持つデータ型。",
  },
  {
    word: "integer",
    reading: "インテジャー",
    meaning: "整数",
    usage: "小数点を含まない数値。略して int (イント) とよく書かれる。",
  },
  {
    word: "void",
    reading: "ボイド",
    meaning: "空っぽの",
    usage: "関数が「何も結果を返さない」ことを示す型。",
  },
  {
    word: "archive",
    reading: "アーカイブ",
    meaning: "記録保管所",
    usage:
      "複数のファイルを一つにまとめたり圧縮保存すること。「アーチブ」ではない。",
  },
  {
    word: "deploy",
    reading: "デプロイ",
    meaning: "配置する",
    usage: "開発したものをサーバーに配置し、利用可能な状態にすること。",
  },
  {
    word: "variable",
    reading: "ヴァリアブル",
    meaning: "変わりやすいもの",
    usage:
      "「変数」（データを入れておく箱）。略して var (ヴァー) と書かれる。",
  },
  {
    word: "schema",
    reading: "スキーマ",
    meaning: "図解、概要、構造",
    usage:
      "データベースの構造定義などのこと。ドイツ語読みの「シェーマ」ではない。",
  },
  {
    word: "query",
    reading: "クエリ",
    meaning: "質問、問い合わせ",
    usage: "データベースへの処理要求のこと。「キューリー」ではない。",
  },
  {
    word: "verbose",
    reading: "バーボース",
    meaning: "言葉数の多い、冗長な",
    usage:
      "ログやエラーメッセージの詳細を出力するモード。「ベルボーズ」ではない。",
  },
  {
    word: "warning",
    reading: "ワーニング",
    meaning: "警告",
    usage:
      "エラーではないが注意すべき状態. 日本では「ウォーニング」より「ワーニング」が定着している。",
  },
  {
    word: "default",
    reading: "デフォルト",
    meaning: "初期設定、怠慢",
    usage: "何も指定しない場合に適用される「初期値」。",
  },
  {
    word: "parameter",
    reading: "パラメーター",
    meaning: "媒介変数",
    usage: "関数などに渡す設定値。「パラメータ」とも。",
  },
  {
    word: "argument",
    reading: "アーギュメント",
    meaning: "引数、議論",
    usage: "関数を呼び出す際に実際に渡す値。",
  },
  {
    word: "initialize",
    reading: "イニシャライズ",
    meaning: "初期化する",
    usage:
      "変数などに最初の値を設定すること。略して init (イニット) と呼ばれる。",
  },
  {
    word: "repository",
    reading: "リポジトリ",
    meaning: "貯蔵庫、倉庫",
    usage: "ソースコードなどの保管場所（Gitなど）。",
  },
  {
    word: "directory",
    reading: "ディレクトリ",
    meaning: "住所録、案内板",
    usage:
      "ファイルを分類する入れ物。Windows等でいう「フォルダ」のこと。",
  },
  {
    word: "compile",
    reading: "コンパイル",
    meaning: "翻訳する、まとめる",
    usage:
      "人間が書いたコードを、コンピュータが実行できる機械語に変換すること。",
  },
  {
    word: "behavior",
    reading: "ビヘイビア",
    meaning: "行動、振る舞い、動作",
    usage:
      "ある入力やイベントに対してシステムやプログラムがどう反応するかを表す。「ビヘービア」ではなく「ビヘイビア」。",
  },
  {
    word: "catch",
    reading: "キャッチ",
    meaning: "受ける、捕まえる",
    usage:
      "try ブロック内で発生した例外を受け取って処理するための構文. throw / try / exception とセットで理解する。",
  },
  {
    word: "throw",
    reading: "スロー",
    meaning: "投げる",
    usage:
      "意図的に例外を発生させること。catch で受け取られなければプログラムが停止する。catch とセットで使われる。",
  },
  {
    word: "try",
    reading: "トライ",
    meaning: "試す",
    usage:
      "例外が発生するかもしれない処理を囲むブロック. catch / finally とセットで使い、例外処理の基本構文を成す。",
  },
  {
    word: "exception",
    reading: "エクセプション",
    meaning: "例外",
    usage:
      "プログラムで本来起こるべきでない状態のこと。catch で処理しないと実行が止まる。throw / catch とセットで理解する。",
  },
  {
    word: "event",
    reading: "イベント",
    meaning: "できごと",
    usage:
      "キー押下・クリックなど、処理のきっかけになるできごとのこと。ソフトウェア内部から意図的に発生させることもある。",
  },
  {
    word: "exit",
    reading: "イグジット",
    meaning: "退出、終了",
    usage:
      "コマンドラインやエディタの終了、プログラムから処理を抜け出す際に使われる。quit と類似するが、より強制終了に近いニュアンスがある。",
  },
  {
    word: "fallback",
    reading: "フォールバック",
    meaning: "代替手段、予備の手段",
    usage:
      "本命が使えないときに代わりに使う手段のこと。CSS でも未対応プロパティの代替値として頻出する。",
  },
  {
    word: "feature",
    reading: "フィーチャー",
    meaning: "特徴、機能",
    usage:
      "読みは「フィーチャー」。「フューチャー（future = 未来）」と混同されやすいので注意。製品の機能や仕様を指すことが多い。",
  },
  {
    word: "fetch",
    reading: "フェッチ",
    meaning: "取りに行く",
    usage:
      "通信を介してサーバーからデータを取得すること。ブラウザの fetch() API や、データ読み出し全般の意味で使われる。",
  },
  {
    word: "font",
    reading: "フォント",
    meaning: "書体のひとそろい",
    usage:
      "書体デザインが統一されたひとそろいの文字セット。現代ではデジタルフォントを指すことがほとんど。",
  },
  {
    word: "hover",
    reading: "ホバー",
    meaning: "空中に漂う",
    usage:
      "UI ではマウスカーソルを要素の上に重ねた状態（ホバー状態）を指す。CSS の :hover 疑似クラスなどで使われる。",
  },
  {
    word: "inherits",
    reading: "インヘリッツ",
    meaning: "受け継ぐ、継承する",
    usage:
      "親クラスのプロパティやメソッドを子クラスが引き継ぐこと。OOP（オブジェクト指向）の中心概念。「インヘリット」の三人称単数形。",
  },
  {
    word: "legacy",
    reading: "レガシー",
    meaning: "遺産",
    usage:
      "IT 業界では古くて今の基準では扱いづらいシステムやコードを指す。「レガシーシステム」のように使う。",
  },
  {
    word: "loop",
    reading: "ループ",
    meaning: "輪、繰り返し",
    usage:
      "同じ処理を条件が満たされるまで繰り返す構造. for / while などが代表的。無限ループは処理が終わらない状態を指す。",
  },
  {
    word: "margin",
    reading: "マージン",
    meaning: "余白、端のスペース",
    usage:
      "CSS では要素の border の外側の余白を指す。border の内側の余白である padding との違いを意識することが重要。",
  },
  {
    word: "optional",
    reading: "オプショナル",
    meaning: "任意の、省略可能な",
    usage:
      "必須ではない設定や引数に使われる。Swift では nil になりうる変数の型としても登場する。Mandatory（必須）の対義語。",
  },
  {
    word: "overlay",
    reading: "オーバーレイ",
    meaning: "重ね合わせる",
    usage:
      "メインコンテンツの上に重ねて表示される UI 要素のこと。モーダルの背景（暗くなる部分）などに使われる。",
  },
  {
    word: "padding",
    reading: "パディング",
    meaning: "内側の余白",
    usage:
      "コンテンツと border の間のスペース。CSS では margin が外側の余白、padding が内側の余白という対になる概念。",
  },
  {
    word: "pixel",
    reading: "ピクセル",
    meaning: "画素",
    usage:
      "画面を構成する最小単位. 解像度やサイズの単位として px と略される。",
  },
  {
    word: "popover",
    reading: "ポップオーバー",
    meaning: "飛び出して表示される要素",
    usage:
      "ボタン等をクリックしたときに近くに表示される小さなウィンドウ. モーダルより軽い一時的な表示に使われる。",
  },
  {
    word: "root",
    reading: "ルート",
    meaning: "根っこ、起源",
    usage:
      "ファイルシステムの最上位階層やシステム管理者アカウントのこと。CSS では :root 疑似クラスで全体に変数を定義する際に使われる。",
  },
  {
    word: "security",
    reading: "セキュリティ",
    meaning: "安全、安全保障、保護",
    usage:
      "データやシステムを脅威から守ること全般を指す。情報セキュリティ・ネットワークセキュリティなど幅広い文脈で使われる。",
  },
  {
    word: "serialize",
    reading: "シリアライズ",
    meaning: "直列化",
    usage:
      "メモリ上のオブジェクトを保存や転送できる形式（JSON など）に変換すること。復元する処理は deserialize（デシリアライズ）と呼ぶ。",
  },
  {
    word: "deserialize",
    reading: "デシリアライズ",
    meaning: "逆直列化",
    usage:
      "外部に保存されたデータをメモリ上のオブジェクトに復元すること。serialize（シリアライズ）の対義語。",
  },
  {
    word: "sibling",
    reading: "シブリング",
    meaning: "兄弟姉妹",
    usage:
      "IT では同じ親要素を持つ要素（兄弟要素）のこと。CSS の隣接セレクタ（+）や一般兄弟セレクタ（~）などで意識する概念。",
  },
  {
    word: "syntax",
    reading: "シンタックス",
    meaning: "文法、構文",
    usage:
      "プログラミング言語の書き方のルール。「syntax error」は文法エラーのことで、コーディング中に最もよく目にするエラーのひとつ。",
  },
  {
    word: "transition",
    reading: "トランジション",
    meaning: "移行、遷移",
    usage:
      "CSS ではプロパティ値の変化をアニメーションで滑らかに見せる機能. ページ遷移やコンポーネントの状態変化にも使われる。",
  },
  {
    word: "unicode",
    reading: "ユニコード",
    meaning: "世界中の文字を統一的に扱う国際規格",
    usage:
      "文字化けを防ぐための国際的な文字コード規格. UTF-8 は Unicode の代表的なエンコーディング方式。",
  },
  {
    word: "variant",
    reading: "バリアント",
    meaning: "変種、異形",
    usage:
      "同じ基本設計の異なるバージョンや種類のこと。UI コンポーネントのサイズ・色違いなどで「variant='primary'」のように使われる。",
  },
  {
    word: "webkit",
    reading: "ウェブキット",
    meaning: "Safariで使われているブラウザエンジン",
    usage:
      "Safari や旧 Edge などのベースとなる OSS のブラウザエンジン. CSS で -webkit- プレフィックスとして登場することがある。",
  },
  {
    word: "deprecated",
    reading: "デプリケーティッド / デプリケイテッド",
    meaning: "非推奨の",
    usage:
      "将来的に廃止される予定があり、使用が推奨されない機能や API に使われる。",
  },
];

export const abbrData = [
  {
    word: "src",
    reading: "ソース",
    meaning: "源 (sourceの略)",
    usage: "外部ファイルの読み込み元を指定。「スルク」ではない。",
  },
  {
    word: "href",
    reading: "エイチレフ",
    meaning: "Hypertext Reference",
    usage: "リンク先のURLを指定。「ハレフ」と呼ぶ人も稀にいる。",
  },
  {
    word: "alt",
    reading: "オルト",
    meaning: "代わりの (alternateの略)",
    usage:
      "代替テキストを指定. ローマ字読みで「アルト」と呼ばれることも多い。",
  },
  {
    word: "async",
    reading: "アシンク",
    meaning: "asynchronous(非同期)の略",
    usage:
      "通信などを待たずに別の処理を進めること。「エイシンク」と読む人もいる。",
  },
  {
    word: "NaN",
    reading: "ナン",
    meaning: "Not a Number",
    usage: "「数値ではない」ことを表す特別な値。",
  },
  {
    word: "GUI",
    reading: "グイ / ジーユーアイ",
    meaning: "Graphical User Interface",
    usage:
      "マウス操作などで直感的に扱える画面。「グイ」と略して読まれることもある。",
  },
  {
    word: "SQL",
    reading: "シークェル / エスキューエル",
    meaning: "Structured Query Language",
    usage: "データベースを操作する言語。「スクル」のようには読まない。",
  },
  {
    word: "CLI",
    reading: "シーエルアイ",
    meaning: "Command Line Interface",
    usage:
      "文字ベースでコマンドを入力して操作する画面や仕組み. GUIの対義語。「クリ」とは読まない。",
  },
  {
    word: "UI",
    reading: "ユーアイ",
    meaning: "User Interface",
    usage:
      "ユーザーと製品・サービスとの接点全体を指す. ボタン配置、リンク、フォームなどもすべて UI の一部. GUI の上位概念。",
  },
  {
    word: "CMYK",
    reading: "シーエムワイケー",
    meaning: "Cyan / Magenta / Yellow / Key (Black)",
    usage:
      "印刷で使われる減法混色の色モデル. 光の三原色を混ぜる RGB（加法混色）とは仕組みが異なり、混ぜるほど暗くなる。",
  },
  {
    word: "API",
    reading: "エーピーアイ",
    meaning: "Application Programming Interface",
    usage: "ソフトウェアやプログラムの間で機能を共有するための仕組み。",
  },
];

## これなに

Misskey 用逆なでリアクション Bot です（[ai](https://github.com/syuilo/ai)ベース）

## 機能

未定

## インストール

> Node.js と npm と MeCab (オプション) がインストールされている必要があります。

まず適当なディレクトリに `git clone` します。
次にそのディレクトリに `config.json` を作成します。中身は次のようにします:

```json
{
	"host": "https:// + あなたのインスタンスのURL (末尾の / は除く)",
	"i": "逆なでBotとして動かしたいアカウントのアクセストークン",
	"master": "管理者のユーザー名(オプション)",
	"notingEnabled": "ランダムにノートを投稿する機能を無効にする場合は false を入れる",
	"keywordEnabled": "キーワードを覚える機能 (MeCab が必要) を有効にする場合は true を入れる (無効にする場合は false)",
	"mecab": "MeCab のインストールパス (ソースからインストールした場合、大体は /usr/local/bin/mecab)",
	"mecabDic": "MeCab の辞書ファイルパス (オプション)"
}
```

`npm install` して `npm run build` して `npm start` すれば起動できます

## ライセンス

MIT

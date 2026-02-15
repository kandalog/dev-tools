# Dev Tools

開発作業で使う小さなユーティリティをまとめた Web ツール集です。

## ツール一覧

| ツール | 説明 |
|---|---|
| CUR CSV Generator | AWS CUR（Cost and Usage Report）のCSVファイルを生成するツール |
| Base64 Encoder | ファイルをBase64文字列にエンコードするツール |

## セットアップ

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてください。

## データの取り扱い

- ユーザー固有の設定値はブラウザの localStorage に保存されます。サーバーへの送信は行いません。
- 個人情報は一切扱いません。

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4

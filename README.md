# 『産業連関分析講義――実践事例をExcelで学ぶ』サポートサイト

土居英二著『産業連関分析講義――実践事例をExcelで学ぶ』（日本評論社）のExcelファイル提供サイトです。
GitHub Pagesでそのまま公開できる静的サイトで、ビルド作業や外部サービスは不要です。

- Repository: `keisemi/input-output-9784535541504`
- Public URL: https://keisemi.github.io/input-output-9784535541504/
- ISBN: `978-4-535-54150-4`

## ファイル構成

- `index.html` : サイト本文・書籍構成
- `style.css` : サイトのデザイン
- `script.js` : ダウンロード対象6ファイルの表示とリンク設定
- `assets/book_cover.png` : 書籍表紙画像
- `data/README.md` : Excelファイル配置場所の説明

## GitHub Pagesで公開する方法

1. GitHubの `keisemi/input-output-9784535541504` リポジトリを **Public** で作成します。
2. このフォルダの内容を、フォルダ構成を保ったままリポジトリのルートへアップロードします。
3. リポジトリの **Settings → Pages** を開きます。
4. **Build and deployment** で **Deploy from a branch** を選択します。
5. Branch を `main`、Folder を `/(root)` にして **Save** します。
6. 公開URLは `https://keisemi.github.io/input-output-9784535541504/` です。

## Excelファイルを公開するとき

Excelファイルは原則として `data/` フォルダに置きます。

1. 公開する `.xlsx` ファイルを `data/` にアップロードします。
2. `script.js` を開き、対応する項目の `url: ''` だけを変更します。
3. Commitすると、サイト上の表示が「公開準備中」から「Excelをダウンロード」に変わります。

例：第8講の場合

```js
url: 'data/lecture_8_by_Eiji-DOI_2026.xlsx'
```

ファイル名は書籍目次の表記に合わせています。実際にアップロードするファイル名と完全一致させてください。

### 別の場所にファイルを置く場合

別リポジトリや外部サーバーにExcelファイルを置く場合は、`url` に直接ダウンロードできるURLを設定できます。

## 現時点の公開予定ファイル

1. `coefficient_tables_by_Eiji-DOI_2026.10.xlsx`
2. `price_converter_by_Eiji-DOI_2026.10.xlsx`
3. `lecture_8_by_Eiji-DOI_2026.xlsx`
4. `lecture_9_by_Eiji-DOI_2026.xlsx`
5. `lecture_10_by_Eiji-DOI_2026.xlsx`
6. `lecture_11_by_Eiji-DOI_2026.xlsx`

## 関連リンク

- 日本評論社 書籍ページ: https://www.nippyo.co.jp/shop/book/9834.html
- GitHub repository: https://github.com/keisemi/input-output-9784535541504
- 参考サイト『新しい環境経済学』: https://keisemi.github.io/empirical_environmental_economics/

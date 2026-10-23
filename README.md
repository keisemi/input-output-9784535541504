# input-output-9784535541504

日本評論社刊『実践事例をExcelで学ぶ 産業連関分析講義』（土居英二著）のサポートサイト一式です。

## 公開URL

https://keisemi.github.io/input-output-9784535541504/

## 含まれるファイル

- `index.html`
- `style.css`
- `script.js`
- `assets/book_cover.png`
- `data/README.md`

## GitHub Pages の設定

1. このファイル一式をリポジトリのルートにアップロードする。
2. GitHub の **Settings → Pages** を開く。
3. **Source** を `Deploy from a branch` にする。
4. **Branch** を `main`、フォルダを `/(root)` にする。
5. **Save** を押す。

## Excel ファイルの追加方法

1. 公開したい Excel ファイルを `data/` フォルダにアップロードする。
2. `script.js` の各項目の `url: ''` を、たとえば `url: 'data/lecture_8_by_Eiji-DOI_2026.xlsx'` のように書き換える。
3. コミットして push する。

`url` が空のままのファイルは、サイト上で「公開準備中」と表示されます。

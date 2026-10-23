/*
  Excelファイル公開時は、原則として各項目の url だけを変更してください。

  例：第8講ファイルを data/ にアップロードした場合
  url: 'data/lecture_8_by_Eiji-DOI_2026.xlsx'

  url が空文字の間は、サイト上で「公開準備中」と表示されます。
  filename は書籍目次に記載されたファイル名に合わせています。
*/
const files = [
  {
    group: '基礎・共通',
    title: '投入係数・自給率係数・逆行列係数の作成方法',
    detail: '家計内生化モデルの逆行列係数表の計算を含む',
    filename: 'coefficient_tables_by_Eiji-DOI_2026.10.xlsx',
    url: ''
  },
  {
    group: '基礎・共通',
    title: '価格変換ファイル',
    detail: '37部門・108部門・188部門',
    filename: 'price_converter_by_Eiji-DOI_2026.10.xlsx',
    url: ''
  },
  {
    group: '第8講',
    title: '観光の経済波及効果',
    detail: '第8講 計算ファイル',
    filename: 'lecture_8_by_Eiji-DOI_2026.xlsx',
    url: ''
  },
  {
    group: '第9講',
    title: '大学の経済効果',
    detail: '第9講 計算ファイル',
    filename: 'lecture_9_by_Eiji-DOI_2026.xlsx',
    url: ''
  },
  {
    group: '第10講',
    title: '原油価格高騰の物価と家計への影響分析',
    detail: '第10講 計算ファイル',
    filename: 'lecture_10_by_Eiji-DOI_2026.xlsx',
    url: ''
  },
  {
    group: '第11講',
    title: '食料品の消費税率1％の家計への影響分析',
    detail: '第11講 計算ファイル',
    filename: 'lecture_11_by_Eiji-DOI_2026.xlsx',
    url: ''
  }
];

const list = document.getElementById('file-list');

files.forEach((file, index) => {
  const card = document.createElement('article');
  card.className = 'file-card';

  const info = document.createElement('div');
  info.className = 'file-info';

  const meta = document.createElement('div');
  meta.className = 'file-meta';
  meta.textContent = `${String(index + 1).padStart(2, '0')} / ${file.group}`;

  const title = document.createElement('h3');
  title.textContent = file.title;

  const detail = document.createElement('p');
  detail.textContent = file.detail;

  const filename = document.createElement('code');
  filename.textContent = file.filename;

  info.append(meta, title, detail, filename);

  const action = document.createElement('div');
  action.className = 'file-action';

  if (file.url) {
    const link = document.createElement('a');
    link.href = file.url;
    link.className = 'download-link';
    link.textContent = 'Excelをダウンロード';
    link.setAttribute('aria-label', `${file.title} のExcelファイルをダウンロード`);

    if (/^https?:\/\//.test(file.url)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.download = file.filename;
    }

    action.append(link);
  } else {
    const pending = document.createElement('span');
    pending.className = 'pending';
    pending.textContent = '公開準備中';
    action.append(pending);
  }

  card.append(info, action);
  list.append(card);
});

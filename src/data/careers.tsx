import React from 'react'

const careersAtFreelance = [
  {
    period: '2020/09 ~ Now',
    title: 'モダンフロントエンドの世界へ',
    langAndFw: 'TypeScript / React / Next.js',
    db: '',
    environment: 'Git',
    cloudService: 'Firebase',
    other: 'Storybook / Jest',
    description: (
      <span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>直近1年は<wbr />フロントエンドエンジニアと<wbr />してReact案件に<wbr />特化。主に<wbr />既存プロジェクトの<wbr />ヘルプ要員と<wbr />して<wbr />従事。<wbr />新規ウェブサイト開発・機能改修・JSから<wbr />TSへ<wbr />書き換え・テストなど。</span>
    )
  },
  {
    period: '2019/01 ~ ',
    title: 'フリーランスのウェブエンジニアへ',
    langAndFw: 'JavaScript / PHP / WordPress',
    db: 'MySQL',
    environment: 'Docker',
    cloudService: '',
    other: '',
    description: (
      <span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>独学の<wbr />末、<wbr />WordPress開発者と<wbr />して<wbr />スタート。<wbr />案件は<wbr />クラウドソーシングサイトから<wbr />受注している。<wbr />LP制作や<wbr />ホームページ制作での<wbr />実装を<wbr />担当。</span>
    )
      ,
  },
];

const careersAtCook = [
  {
    period: '2017/04 ~ Now',
    title: '地元に戻り、喫茶店の調理職へ',
    langAndFw: '',
    db: '',
    environment: '',
    cloudService: '',
    other: '',
    description: (
        <span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>地元食材を<wbr />用いた<wbr />付加価値の<wbr />高い<wbr />商品を<wbr />提供している。<wbr />自分が<wbr />独学した<wbr />もののもうひとつが<wbr />料理で、<wbr />それが<wbr />嵩じて<wbr />調理職に。</span>
      ),
  },
  {
    period: '2012/10 ~ 2017/04',
    title: 'レストラン事業会社に就職',
    langAndFw: '',
    db: '',
    environment: '',
    cloudService: '',
    other: '',
    description: (
      <span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>店長候補と<wbr />して<wbr />入社し、<wbr />予算・売上管理や<wbr />従業員マネジメントなど<wbr />店舗運営業務を<wbr />全般的に<wbr />行う。<wbr />特に<wbr />従業員マネジメントに<wbr />力を<wbr />入れ、<wbr />アルバイトの<wbr />離職率改善へ<wbr />取り組む。</span>
    )
      ,
  },
];

const personalDevelopment = [
  {
    period: '2021',
    title: 'Food Blog',
    langAndFw: 'TypeScript / React / Next.js/ Tailwind CSS',
    db: 'microCMS',
    environment: 'Git / GitHub Actions',
    cloudService: '',
    other: 'Storybook / MDX',
    description: (
      <span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>Next.jsと<wbr />microCMSで<wbr />作った<wbr />レシピブログの<wbr />サンプル。<wbr />要件と<wbr />して<wbr />非エンジニアの<wbr />方が<wbr />CMSから<wbr />入稿と<wbr />サイトの<wbr />基本設定の<wbr />変更が<wbr />できる<wbr />ことを<wbr />想定。<wbr />Markdownだけでなく<wbr />MDXにも<wbr />対応している<wbr />ため<wbr />拡張性が<wbr />ある。<wbr />Core Web Vitalsを<wbr />意識した<wbr /> SEO、<wbr />構造化データ定義、<wbr />PWA、<wbr />RSSなど<wbr />メディアサイトと<wbr />して<wbr />十分な<wbr />機能を<wbr />実装している。</span>
    )
     ,
  },
  {
    period: '2021',
    title: 'My Favorite Gear',
    langAndFw: 'TypeScript / React / MUI',
    db: 'Firestore',
    environment: 'Git / GitHub Actions',
    cloudService: 'Firebase[Hosting]',
    other: 'Twitter API / Rakuten API',
    description: (
      <span style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>自分の<wbr />お気に<wbr />入りの<wbr />アイテムを<wbr />8つ<wbr />選んで<wbr />Twitterに<wbr />投稿できる。<wbr />Twitter・アプリケーション・商品サイト（楽天・Amazon）間の<wbr />スムーズな<wbr />導線を<wbr />構築。ご<wbr />利用には<wbr />Twitterアカウントが<wbr />必要。</span>
    )
     ,
  },
];

export { careersAtFreelance, careersAtCook, personalDevelopment };

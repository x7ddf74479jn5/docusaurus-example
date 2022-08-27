import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

type PersonalLinkItem = {
  url: string;
  text: string;
};

const PersonalLinkItem = ({ url, text }: PersonalLinkItem) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {text}
      </a>
    </li>
  );
};

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout title="Home" description="サメパンのポートフォリオサイト">
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--info button--lg margin--xs"
              to={useBaseUrl('/skillandcareer')}
            >
              スキル &amp; 経歴
            </Link>
            <Link className="button button--outline button--info button--lg margin--xs" to={useBaseUrl('/myproducts')}>
              個人開発
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container padding--md">
          <section>
            <h3 className="text--center decoration-line">当サイトについて</h3>
            <div>
              <p>
                Frontend Engineerであるサメパンのポートフォリオサイトです。
                <br />
                経験スキルや実務経歴、個人開発の履歴、各種技術活動に関するアカウントのリンクなどを集約しています。
              </p>
            </div>
          </section>
          <section>
            <h3 className="text--center decoration-line">管理人プロフィール</h3>
            <div>
              <div className="card-demo margin-vert--sm">
                <div className="card shadow--tl">
                  <div className="card__header">
                    <div className="avatar">
                      <img
                        className={clsx('avatar__photo avatar__photo--xl', styles.backgroundColorWhite)}
                        src={useBaseUrl('img/pandashark_logo.svg')}
                      />
                      <div className="avatar__intro">
                        <h3 className="avatar__name">サメパン</h3>
                        <small className="avatar__subtitle">( x7ddf74479jn5 )</small>
                      </div>
                    </div>
                  </div>
                  <div className="card__body">
                    <p>
                      Frontend engineer | Cook。
                      <br />
                      喫茶店で料理を作る人兼フリーランスのフロントエンドエンジニアとして働いています。
                    </p>
                    <p>
                      実務経験として、フロントエンドのフリーランス案件の経験はありますが、
                      <br />
                      いまいちスキルの中途半端感があるのでフロントエンド領域のスキルを伸ばそうと日々勉強しています。
                      <br />
                      最近、メインで使用しているものはTypeScript、React、時にNext.jsです。
                      <br />
                      また、基礎の地盤固めとしてZennやQiitaのウェブ開発系の記事を読み漁っています。
                    </p>
                  </div>
                  <div className="card__footer">
                    <p>個人ホームページや各種技術活動に関するアカウントはこちら。</p>
                    <ul>
                      <PersonalLinkItem url={siteConfig.customFields.url['homepage']} text="ホームページ" />
                      <PersonalLinkItem url={siteConfig.customFields.url['wantedly']} text="Wantedly" />
                      <PersonalLinkItem url={siteConfig.customFields.url['github']} text="GitHub" />
                      <PersonalLinkItem url={siteConfig.customFields.url['gist']} text="Gist" />
                      <PersonalLinkItem url={siteConfig.customFields.url['twitter']} text="Twitter" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

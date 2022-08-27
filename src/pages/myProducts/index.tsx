import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './index.module.css';
import { webSite, devTools } from '../../data/products';

type Product = {
  productName: string;
  description: React.ReactNode;
  imageUrl: string;
  url: string;
  githubUrl: string;
};

const Product = ({ productName, description, imageUrl, url, githubUrl }: Product) => {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx('card', 'shadow--lw-custom', styles.cardCustom)}>
        <p className="text--center card__image">
          <img src={useBaseUrl(imageUrl)} alt={productName} className={styles.productImg} />
        </p>
        <div className={clsx('card__body', styles.cardBodyCustom)}>
          <h4>{productName}</h4>
          <small>{description}</small>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {url && (
              <a
                className="button button--small button--secondary button--block"
                href={url}
                target="_blank"
                rel="noreferrer noopener"
              >
                作品リンク
              </a>
            )}
            {githubUrl && (
              <a
                className="button button--small button--secondary button--block"
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MyProducts = () => {
  return (
    <Layout title="MyProducts" description="サメパンの個人開発">
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">My Products</h1>
          <p className="hero__subtitle">個人で作成した成果物など</p>
        </div>
      </header>
      <main>
        <section className="container padding--md">
          <h2 className="text--center">Webサイト</h2>
          <section>
            <h3 className="text--center decoration-line">運営</h3>
            {webSite.siteMyProducts && webSite.siteMyProducts.length && (
              <div className="row padding-vert--lg">
                {webSite.siteMyProducts.map((props, idx) => (
                  <Product key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">単発</h3>
            {webSite.oneShotProducts && webSite.oneShotProducts.length && (
              <div className="row padding-vert--lg">
                {webSite.oneShotProducts.map((props, idx) => (
                  <Product key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
          <section>
            <h3 className="text--center decoration-line">その他</h3>
            {webSite.otherProducts && webSite.otherProducts.length && (
              <div className="row padding-vert--lg">
                {webSite.otherProducts.map((props, idx) => (
                  <Product key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
        </section>
        <section className="container padding--md">
          <h2 className="text--center">開発ツール</h2>
          <section>
            <h3 className="text--center decoration-line">レポジトリ</h3>
            {devTools && devTools.length && (
              <div className="row padding-vert--lg">
                {devTools.map((props, idx) => (
                  <Product key={idx} {...props} />
                ))}
              </div>
            )}
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default MyProducts;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pandashark's Portfolio",
  tagline: 'Pandasharkのポートフォリオ',
  url: 'https://pandashark-portfolio.netlify.app',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/pandashark_logo.svg',
  organizationName: 'x7ddf74479jn5', // Usually your GitHub org/user name.
  projectName: 'x7ddf74479jn5.github.io', // Usually your repo name.
  customFields: {
    url: {
      homepage: 'https://three-homepage.vercel.app',
      wantedly: 'https://www.wantedly.com/id/tomohiro_ueno_l',
      github: 'https://github.com/x7ddf74479jn5',
      gist: 'https://gist.github.com/x7ddf74479jn5',
      twitter: 'https://twitter.com/pandashark6',
      instagram: 'https://www.instagram.com/pandashark_',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://x7ddf74479jn5.github.io/docusaurus-portfolio/tree/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-XQ5VDC7QGF',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Pandashark's Portfolio",
        logo: {
          alt: 'Pandasharkのロゴ',
          src: '/img/pandashark_logo.svg',
        },
        items: [
          { to: '/skillandcareer', label: 'Skill & Career', position: 'left' },
          { to: '/myproducts', label: 'MyProducts', position: 'left' },
          {
            href: 'https://three-homepage.vercel.app',
            label: 'Homepage',
            position: 'left',
          },
          {
            href: 'https://github.com/x7ddf74479jn5/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Material Source',
                to: 'source',
              },
              {
                label: 'Privacy Policy',
                to: 'policy',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Homepage',
                href: 'https://three-homepage.vercel.app/',
              },
              {
                label: 'Wantedly',
                href: 'https://www.wantedly.com/id/tomohiro_ueno_l',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/x7ddf74479jn5',
              },
              {
                label: 'GitHub Gist',
                href: 'https://gist.github.com/x7ddf74479jn5',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pandashark6',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/pandashark_',
              },
              {
                html: `
                  <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                  </a>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pandashark Built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;

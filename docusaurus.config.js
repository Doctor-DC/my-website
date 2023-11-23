// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DC website',
  tagline: '个人网站',
  url: 'https://wtf.academy',
  staticDirectories: ['public', 'static'],
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DC', // Usually your GitHub org/user name.
  projectName: 'frontend', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/WTFAcademy/frontend',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/WTFAcademy/frontend',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DC website',
        // hideOnScroll: true,
        logo: {
          alt: 'WTF Logo',
          src: 'img/cat-purple.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '📖文档',
          },
          {
            position: "right",
            label: "💎Demo",
            items: [
              {
                label: "苹果系统",
                to: "/macos/macos",
              }
            ]
          },
          {
            to: 'https://github.com/Doctor-DC',
            // label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '记录',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/Doctor-DC',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dc Academy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
  plugins: [
    "./postcss-tailwind-loader",
    "docusaurus2-dotenv",
    async function unocssPlugin() {
        return {
          name: 'docusaurus-unocss',
          configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require('postcss-nesting'))
            postcssOptions.plugins.push(require('@unocss/postcss'))
            return postcssOptions
          },
        }
      },
  ]
};

module.exports = config;

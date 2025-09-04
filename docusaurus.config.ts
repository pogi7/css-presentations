import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CSS Presentations',
  tagline: 'Presentations that help students find internships and what working in industry is like.',
  favicon: 'https://static.thenounproject.com/png/40716-200.png',

  // Set the production url of your site here
  url: 'https://pogi7.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/css-presentations/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pogi7', // Usually your GitHub org/user name.
  projectName: 'css-presentations', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pogi7/css-presentations/tree/master/',
        },
        blog: {
          // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
          path: 'changelog',
          routeBasePath: 'changelog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pogi7/css-presentations/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Internships',
        src: 'https://static.thenounproject.com/png/40716-200.png',
      },
      items: [
        {href: '/', label: 'Home', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },
        {
          href: 'https://github.com/pogi7/css-presentations',
          label: 'Source Code',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs 📑',
          items: [
            {
              label: 'TL;DR',
              to: '/docs/tldr',
            },
            {
              label: 'Resources',
              to: '/docs/category/resources',
            },
            {
              label: 'Change Log',
              to: '/changelog',
            }
          ],
        },
        {
          title: 'Socials 👋',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/aaronlevitt7',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pogi7',
            },
            {
              label: 'Discord | pogi7',
              href: 'https://www.discord.com',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus | Content is the Author's Own Opinions`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CloudPilot AI',
  tagline: 'More Cloud, Less Cost',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.cloudpilot.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CloudPilot AI', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: function ({ locale, docPath }) {
            return `https://github.com/cloudpilot-ai/docs/edit/main/docs/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'DLYS8CWYIF',

      // Public API key: it is safe to commit it
      apiKey: '42d9ff986d46911fbcded1efd8c6721d',

      indexName: 'CloudPilot AI',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CloudPilot AI',
      logo: {
        alt: 'CloudPilot AI Logo',
        src: 'img/logo.svg',
        href: 'https://cloudpilot.ai',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'changelogSidebar',
          label: 'Changelog',
          position: 'left',
        },
        {
          to: 'api',
          sidebarId: 'apiSidebar',
          label: 'API',
          position: 'left',
        },
        /* Navbar Item "Karpenter GCP" */
        {
          label: 'Karpenter GCP',
          position: 'left',
          items: [
            /**
             * The dropdown item list.
             *
             * The "type" should be "docSidebar", link to a collection of documents.
             * The "label" is the text of the dropdown item.
             * The "sidebarId" matches the id of the sidebar in the sidebars.ts file.
             */
            {
              type: 'docSidebar',
              label: '0.1.0',
              sidebarId: 'karpeneterGcp_0.1.0_Sidebar'
            },
          ]
        },
        /* Navbar Item "Alibaba Cloud" */
        {
          label: 'Karpenter Alibaba Cloud',
          position: 'left',
          items: [
            /**
             * The dropdown item list.
             *
             * The "type" should be "docSidebar", link to a collection of documents.
             * The "label" is the text of the dropdown item.
             * The "sidebarId" matches the id of the sidebar in the sidebars.ts file.
             */
            {
              type: 'docSidebar',
              label: '0.1.0',
              sidebarId: 'karpeneterAlicloud_0.1.0_Sidebar'
            },
          ]
        },
        {
          to: 'https://www.cloudpilot.ai/pricing',
          label: 'Pricing',
          position: 'right',
        },
        {
          to: 'https://console.cloudpilot.ai',
          label: 'Sign Up',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} CloudPilot AI, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;

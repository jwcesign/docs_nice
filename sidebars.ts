import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting-started/introduction' },
      items: [
        'getting-started/introduction',
        'getting-started/getting-started',
        'getting-started/permissions-required',
      ],
    },
    {
      type: 'category',
      label: 'Tips',
      items: [
        'tips/ecr_auto_create',
        'tips/monitor_availability',
        'tips/aws_alb_best_practice',
      ],
    },
  ],
  /**
   * For every product version, we create a new file in the "changelog" directory,
   * and add it to the "items" below
   */
  changelogSidebar: [
    {
      type: 'category',
      label: 'Product Changelog',
      items: [
        'changelog/1.8.0',
        'changelog/1.7.0',
      ]
    },
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'API',
      link: { type: 'doc', id: 'api/index' },
      items: [
      ],
    },
  ],

  /** For every version for each providers, we need to create a new sidebar definition. */

  // The collection of "Karpenter GCP - 0.1.0" documents.
  // ['karpeneterGcp_0.1.0_Sidebar']: [
  //   /* We can add a new document to the "Karpenter GCP - 0.1.0" version. */
  //   // 'karpenter/gcp/0.1.0/getting-started',

  //   /** We can also add an accordion using "type" category */
  //   {
  //     type: 'category',
  //     label: 'Karpenter GCP Provider',
  //     /**
  //      * The collection of documents belonging to the "Karpenter GCP - 0.1.0" version.
  //      *
  //      * We use "karpeneter/gcp/[version]/[filename].mdx" name convention to store multiple
  //      * versions of documents in different directories.
  //      *
  //      * After add a new document, you need to add it to the below "items" list.
  //      */
  //     items: [
  //       'karpenter/gcp/0.1.0/getting-started',
  //     ],
  //   },
  //   // {
  //   //   type: 'category',
  //   //   label: 'Tips',
  //   //   items: [
  //   //   ],
  //   // }
  // ],

  // The collection of "Karpenter Alibaba Cloud - 0.1.0" documents.
  ['karpeneterAlicloud_preview_Sidebar']: [
    {
      type: 'category',
      label: 'Karpenter Alibaba Cloud Provider',
      items: [
        'karpenter/alicloud/preview/getting-started',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tips',
    //   items: [
    //   ],
    // }
  ],
};

export default sidebars;

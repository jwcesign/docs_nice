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
  ['karpeneterGcp_0.1.0_Sidebar']: [
    {
      type: 'category',
      label: 'Karpenter GCP Provider',
      items: [
        'karpenter/gcp/0.1.0/gcp',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tips',
    //   items: [
    //   ],
    // }
  ],
  ['karpeneterAlicloud_0.1.0_Sidebar']: [
    {
      type: 'category',
      label: 'Karpenter Alibaba Cloud Provider',
      items: [
        'karpenter/alicloud/0.1.0/alicloud',
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

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

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
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'getting-started/introduction'},
      items: [
        'getting-started/introduction',
        'getting-started/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Product Changelog',
      items: [
        'changelog/changelog',
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      link: {type: 'doc', id: 'casestudies/index'},
      items: [
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: {type: 'doc', id: 'api/index'},
      items: [
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
    }
  ],
};

export default sidebars;

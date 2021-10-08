const { description, authors } = require('../../package')

module.exports = {
  theme: 'reco',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '靠北南工+ API Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    author: authors.name,
    startYear: '2021',
    nav: [
      {
        text: '首頁',
        link: 'https://??'
      },
      {
        text: 'API',
        link: '/guide/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/NTIHS-FK'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'API Docs',
          collapsable: false,
          children: [
            '',
            '/guide/API'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

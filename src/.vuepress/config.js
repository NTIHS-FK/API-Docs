const { description, authors } = require('../../package')

module.exports = {
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
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
    repo: 'NTIHS-FK',
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
      }
    ],
    sidebar: [
      '/',
      '/guide/',
      '/guide/APIReference',
      {
        title: 'APIS',   // required
        path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/guide/api/post',
          '/guide/api/broadcast'
        ]
      }
    ]
    
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

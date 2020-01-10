module.exports = {
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'GitHub', link: 'https://github.com/MattMcAdams/stratus'}
    ],
    sidebar: [
      '/',
      {
        title: 'Color',
        path: '/color/functions',
        collapsable: false,
        children: [
          '/color/functions',
          '/color/configuration'
        ]
      },
      {
        title: 'Typography',
        path: '/type/mixins',
        collapsable: false,
        children: [
          '/type/mixins',
          '/type/configuration',
          '/type/advanced'
        ]
      }
    ]
  }
}

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
          '/type/functions',
          '/type/configuration'
        ]
      },
      {
        title: 'Structure',
        path: '/structure/functions',
        collapsable: false,
        children: [
          '/structure/functions',
          '/structure/configuration'
        ]
      },
      {
        title: 'Media',
        path: '/media/mixins',
        collapsable: false,
        children: [
          '/media/mixins',
          '/media/functions',
          '/media/configuration'
        ]
      }
    ]
  }
}

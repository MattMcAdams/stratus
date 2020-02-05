module.exports = {
  title: 'Stratus',
  base: '/stratus/',
  dest: 'docs',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'GitHub', link: 'https://github.com/MattMcAdams/stratus'}
    ],
    sidebar: [
      '/',
      {
        title: 'Configuration',
        path: '/config',
        collapsable: false,
        children: [
          '/config/',
          '/config/module'
        ]
      },
      {
        title: 'Modules',
        collapsable: false,
        children: [
          '/modules/core',
          '/modules/color',
          '/modules/type',
          '/modules/structure',
          '/modules/media'
        ]
      }
    ]
  }
}

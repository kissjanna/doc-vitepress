module.exports = {
  title: 'Doc',
  description: '物来顺应，未来不迎',
  // head: [
  //   // 添加图标
  //   ['link', { rel: 'icon', href: '/img/carrie.ico' }]
  // ],

  // // 主题配置
  // themeConfig: {
  //   // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  //   // lastUpdated: 'Last Updated', // string | boolean
  //   // 启动页面丝滑滚动
  //   smoothScroll: true,
  //   // 导航栏配置
  //   nav: [
  //     { text: '我的个人网站', link: 'https://www.cooldream.fun/home' },
  //     { text: '掘金', link: 'https://juejin.cn/user/1855631359481847/posts' },
  //     { text: 'Github', link: 'https://github.com/Jack-Star-T' }
  //   ]
  // },
  head: [
    ['link', { rel: 'icon', href: '/img/carrie.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require('./nav.js'),
    sidebar: require('./sidebar/index'),
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}

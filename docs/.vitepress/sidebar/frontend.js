module.exports = [
  {
    text: 'HTML/CSS',
    children: [
      {
        text: 'html',
        link: '/frontend/html-css/html/1-html5',
        children: [
          { text: 'html5新增内容', link: '/frontend/html-css/html/1-html5' },
          { text: 'meta 标签', link: '/frontend/html-css/html/2-meta' }
        ]
      },
      {
        text: 'css',
        link: '/frontend/html-css/css/index',
        children: [
          { text: 'flex', link: '/frontend/html-css/css/1-flex' }
        ]
      },
      {
        text: 'bootstrap',
        link: '/frontend/html-css/bootstrap/index',
        children: [
          {}
        ]
      }
    ]
  },
  {
    text: 'JavaScript基础',
    children: [
      {
        text: 'ES6',
        link: '/frontend/javascript/1-es6/index',
        children: [
          { text: 'let 和 const', link: '/frontend/javascript/1-es6/1-let-const' },
          { text: '变量的解构赋值', link: '/frontend/javascript/1-es6/2-variable' },
          { text: '字符串的扩展', link: '/frontend/javascript/1-es6/3-string' },
          { text: '字符串的新增方法', link: '/frontend/javascript/1-es6/4-string-new' }
        ]
      },
    ]
  },
  {
    text: 'JavaScript进阶',
    children: [
      { text: '', link: '/frontend/javascript-enhance/' },
    ]
  },
  {
    text: 'Node Js',
    children: [
      { text: '', link: '/frontend/nodejs/' },
    ]
  },
  {
    text: 'Vue3',
    children: [
      { text: '', link: '/frontend/vue/' },
    ]
  },
  {
    text: '前端性能优化',
    children: [
      { text: '', link: '/frontend/performance-optimization/' },
    ]
  }
]
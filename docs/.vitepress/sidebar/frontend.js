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
        link: '/frontend/html-css/css/',
        children: [
          { text: 'flex', link: '/frontend/html-css/css/1-flex' }
        ]
      },
      {
        text: 'bootstrap',
        link: '/frontend/html-css/bootstrap/',
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
        link: '/frontend/javascript/1-es6/',
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
      { text: 'JavaScript进阶', link: '/frontend/javascript-enhance/' },
    ]
  },
  {
    text: 'TypeScript',
    children: [
      { text: 'TypeScript', link: '/frontend/typescript/' },
    ]
  },
  {
    text: 'Node Js',
    children: [
      { text: '', link: '/frontend/nodejs/' },
    ]
  },
  {
    text: 'Vue2',
    children: [
      { text: 'vue2', link: '/frontend/vue/vue2/' },
    ]
  },
  {
    text: 'Vue3',
    children: [
      { text: 'vue3', link: '/frontend/vue/vue3/' },
      { text: 'vue3-jsx', link: '/frontend/vue/vue3/jsx' },
      { text: 'vue3补充', link: '/frontend/vue/vue3/2' },
    ]
  },
  {
    text: '前端性能优化',
    children: [
      { text: '', link: '/frontend/performance-optimization/' },
    ]
  }
]
# vue3

## 动态组件

vue2中的动态组件：https://cn.vuejs.org/v2/guide/components-dynamic-async.html

```javascript
// 全局注册
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)

// 局部注册
new Vue({
  // ...
  components: {
    'my-component': () => import('./my-async-component')
  }
})

// 或使用异步工厂函数
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

vue3中的动态组件：https://v3.cn.vuejs.org/guide/migration/async-components.html#_3-x-%E8%AF%AD%E6%B3%95

```javascript
// 由于函数式组件被定义为纯函数，因此异步组件需要通过将其包裹在新的 defineAsyncComponent 助手方法中来显式地定义：
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// 不带选项的异步组件
const asyncModal = defineAsyncComponent(() => import('./Modal.vue'))

// 带选项的异步组件，component更名为loader，异步懒加载的含义更加清晰
const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('./Modal.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

// 此外，与 2.x 不同，loader 函数不再接收 resolve 和 reject 参数，且必须始终返回 Promise

```javascript
// 2.x 版本
const oldAsyncComponent = (resolve, reject) => {
  /* ... */
}

// 3.x 版本
const asyncComponent = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      /* ... */
    })
)
```
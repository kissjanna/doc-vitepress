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

// 带选项的异步组件
const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('./Modal.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

## debug 用的钩子函数

onRenderTracked

onRenderTriggered

```javascript
onRenderTriggered(event => {console.log(event)})
```

## watch

写在setup里面，不止可以接收一个值，还可以接收一个数组，数组里放多个值

```javascript
setup () {
  watch([value1, value2], (newvalue, oldvalue) => {
    console.log(value1 + value2)
  })
}
```

但是打印出来的reactive对象，是一个proxy，对debug非常不友好

但是如果用类似于data.count这种形式来打印的话，又会使number等类型的值失去响应式，这种值无法被watch

解决的办法是，可以使用getter的方式来监听，也就是使用函数+返回值

```javascript
setup () {
  watch([value1, () => data.count], (newvalue, oldvalue) => {
    console.log(value1 + value2)
  })
}
```








































---
title: xxx
editLink: true
home: true
---

<!-- sidebar can use auto or false

# base reademe

{{i}}

{{theme}}

{{page}}


::: v-pre
`{{ This will be displayed as-is }}`
:::

```js{1,4,6-7}
export default {
  name: 'MyComponent',
  // ...
}
export default {
  name: 'MyComponent',
  // ...
}
export default {
  name: 'MyComponent',
  // ...
}
``` -->

<CustomComponent />

<!-- <img class="main-page-gg-img" :src="withBase('/img/gg.jpeg')" alt="foo"> -->

<!-- ![test image](./img/gg.jpeg) -->

<script setup>
import { withBase, useData } from 'vitepress'
import CustomComponent from './.vitepress/components/CustomComponent.vue'

const i = 'iii'

const { theme, page } = useData()
</script>

<style lang="scss">
.title {
  font-size: 20px
}
</style>

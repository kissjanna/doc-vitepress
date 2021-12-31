---
title: xxx
editLink: true
sidebar: auto
---

sidebar can use auto or false

# base reademe

{{i}}

{{theme}}

{{page}}

## next title

## second title

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
```

<CustomComponent />

<script setup>
import { withBase, useData } from 'vitepress'
import CustomComponent from './components/CustomComponent.vue'

const i = 'iii'

const { theme, page } = useData()
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>

<style lang="sass">
.title
  font-size: 20px
</style>

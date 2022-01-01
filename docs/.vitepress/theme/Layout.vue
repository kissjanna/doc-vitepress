<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { withBase, useData } from 'vitepress'
import CustomComponent from '../components/CustomComponent.vue'
console.log(this)
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-top>
      <div class="carrie-sidebar-top flex">
        <div>2022，你好</div>
        <!-- <div>物来顺应，未来不迎</div> -->
        <!-- <div>当下不杂，既往不恋</div> -->
      </div>
    </template>
    <CustomComponent></CustomComponent>
  </Layout>
</template>

<style lang="scss">
  .carrie-sidebar-top {
    padding: 12px 24px 0px;
    flex-wrap: wrap;
    align-items: center;
    color: #999999;
  }
</style>

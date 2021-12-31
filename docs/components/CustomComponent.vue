<template>
  <div class="custom-component-wrap">
    custom-component-wrap
  </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  props: {},
  data () {
    return {}
  },
  mounted () {
    this.refresh()
  },
  methods: {
    refresh () {}
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-component-wrap {}
</style>

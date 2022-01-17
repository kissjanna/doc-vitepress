<template>
  <div class="custom-component-wrap">
    <pre>hello, Carrie</pre>
    <div class="main-page-gg-img"></div>
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
.custom-component-wrap {
  .main-page-gg-img {
    width: 100%;
    padding-top: 60%;
    // height: 100px;
    background-color: rgba(255, 192, 203, 0.172);
    background-image: url('/img/gg.jpeg');
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>

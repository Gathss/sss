<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <BilibiliTagNav></BilibiliTagNav>
    <main>
      <router-view/>    <!-- <router-view/> 路由跳转内容容器-->
    </main>
    <FooterNav></FooterNav>
  </div>
</template>

<style lang="less">
html,body{
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

  main{
    min-height: calc(100% - 215px - 90px);
  }
}
</style>

<script>
import BilibiliTagNav from './components/BilibiliTagNav.vue'
import FooterNav from './components/FooterNav.vue'

export default {
  name: 'App',
  computed: {
    intoCount () {
      return this.$store.state.openPageCount
    }
  },
  components: {
    BilibiliTagNav,
    FooterNav
  }
}
</script>

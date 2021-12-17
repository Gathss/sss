<template>
  <div >
    <div ref="topCom" :class="isFixed?'topCom fixed':'topCom'"></div>
    <div class="wrapper">
      <div style="height:1500px;background-color: red;background-image: linear-gradient(to bottom, red , blue);">
        Detail
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.fixed{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.topCom{
  background-color: pink;
  // position: sticky;
  // top: 0;
}

div{
  min-height: 50px;
}

.wrapper{
  overflow: hidden;
  height:300px;
  position: relative;
}
</style>

<script>
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    console.log('传值：')
    console.log(this.$route.params.myId)

    window.onscroll = this.handleScroll
    /* eslint-disable no-unused-vars */
    // const bs = new BetterScroll('.wrapper', {})

    /* eslint-disable no-new */
    new BetterScroll('.wrapper', {
      scrollbar: {
        fade: true,
        interactive: false // 1.8.0 新增
      }
    })
  },
  methods: {
    handleScroll () {
      console.log(document.documentElement.scrollTop)
      // console.log(this.$refs.header.offsetHeight)

      // 检测滚动
      if (document.documentElement.scrollTop >= (90 + 30 * 2 + 1)) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }

      // console.log(this.isFixed)
    }
  }
}
</script>

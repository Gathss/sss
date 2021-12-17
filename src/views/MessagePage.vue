<template>
  <div>
    信息页
    <input type="text" ref="myinput" />
    <p>{{ comMsgStr }}</p>
    <button @click="printComMsgStr()">点击</button>
  </div>
</template>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
div{
  height: 100%;

  input{
    [type="text"]{
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      color: gray;
      border: 1px solid rgba(0, 255, 255, 0.5);
    }
  }
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      msgStr: ''
    }
  },
  computed: {
    comMsgStr () {
      return '计算属性文本：' + this.msgStr
    },

    ...mapState({
      sysInfo: state => state.sysInfo,

      // 传字符串参数 'count' 等同于 `state => state.openPageCount`
      openPageCount: 'openPageCount',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countSting (state) {
        return state.openFirstPageCount + '次,' + this.openPageCount + '次'
      }
    })
  },
  created () {
    this.$store.commit('gotoPage')
  },
  mounted () {
    // console.log(this.sysInfo)
    // console.log(this.openPageCount)
    // console.log(this.countSting)
    console.log('第' + this.openPageCount + '次进入页面')
    console.log('第' + this.$store.getters.openOtherPageCount + '次进入其他页')
    console.log(this.$store.getters.getSysinfoToIndex(2))
  },
  methods: {
    printComMsgStr () {
      // console.log('comMsgStr: ' + this.comMsgStr)
      this.msgStr = this.$refs.myinput.value
    }
  }
}
</script>

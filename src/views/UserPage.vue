<template>
  <div>
    用户页
  </div>
</template>

<style lang="less" scoped>
div{
  height: 100%;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      pageNumber: 3
    }
  },
  computed: {
    nowNumber () {
      return this.pageNumber * 3
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      // ...
      sysInfo: 'sysInfo'
    })
  },
  methods: {
    conlogData (data) {
      console.log(data)
    }
  },
  created () {
    this.$store.commit('gotoPage')
  },
  mounted () {
    this.conlogData(this.sysInfo)
    console.log('this.nowNumber: ' + this.nowNumber)
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in pageTextInfoList" :key="item" @click="handleChangePage(item)">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
ul{
  li{
    list-style: none;
  }
}
</style>
<script>
export default {
  data () {
    return {
      pageTextInfoList: ['111111', '222222', '33333333', '44444']
    }
  },
  methods: {
    handleChangePage (id) {
      console.log(id)
      // 编程式导航
      // this.$router.push(`/Detail/${id}`)
      // this.$router.push({ path: `/user/${userId}` }) // 路径跳转
      this.$router.push({ name: 'Detail', params: { myId: id } }) // 名字跳转
      // 提供了path后，再加params会被忽略，所以要么在path中添加完整的参数，要么使用name+params
    }
  }
}
</script>

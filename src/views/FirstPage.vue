<template>
  <article>
    <section>
      <Swiper class="swiperCom" myclassName="swiperCom" :isPagination=true :isLoop=true :key="swiperArry.length + '-swiper'">
        <div class="swiper-slide" v-for="(item,index) in swiperArry" :key="index + '-swiper-slide'">
          <img :src="item" alt="轮播图片">
        </div>
      </Swiper>
      <div class="titleMssage">
        <h1 class="mainPageTitle" :key="title.length  + '-mainPageTitle'">{{ title }}</h1>
        <p class="mainPageTitleText" :key="titleText.length  + '-mainPageTitleText'">{{ titleText }}</p>
      </div>
    </section>
    <section>
      Tab-Header
      <!-- <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" style="width:320px;height:330px;"/>
      <img alt="Vue logo" src="../assets/logo.png">
      <img src="../swiperImg/5.png" alt="img5"> -->
    </section>
    <section>
      <router-view />
    </section>
  </article>
</template>

<style lang="less" >
*{
  margin: 0;
  padding: 0;
}
article{
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;

  section{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);

    .swiperCom{
      width: 880px;
      height: 387px;
      margin: 0;
      padding: 0;
      flex: 0 0 880px;
      // position: absolute;
      // top: 0;
      // left: 0;
    }

    .titleMssage{
      flex: 1;
      text-align: left;
      padding: 0 20px;

      p{
        width: 100%;
        text-indent: 32px;
        margin-top: 20px;
        // display: inline-block;
      }
    }
  }

}
</style>

<script lang="ts">
import axios from 'axios'
import Swiper from '../components/Swiper.vue'
import { mapState } from 'vuex'

export default {
  name: 'FirstPage',
  data () {
    return {
      title: '',
      titleText: '',
      swiperArry: [],
      img: ''
    }
  },
  computed: mapState([
  // 映射 this.openPageCount 为 store.state.openPageCount
    'openPageCount',
    'openFirstPageCount',
    'loginSysCount',
    'sysInfo'
  ]),
  created () {
    this.$store.commit('gotoFirstPage')
  },
  mounted () {
    axios({
      method: 'get',
      url: '/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
    }).then(res => {
      // console.log('getImg')
      this.img = res.data
      // console.log(this.img)
    })

    const swiperImgArry = this.getSwiperImg()
    // console.log(swiperImgArry)
    this.swiperArry = swiperImgArry
    this.title = this.getTitle()
    this.titleText = this.getTitleText()

    console.log('第' + this.openPageCount + '次进入页面')
    console.log('第' + this.openFirstPageCount + '次进入首页')

    const oldsysLenth = this.sysInfo.length

    console.log(this.sysInfo.length)
    console.log('上次的消息：' + this.sysInfo[this.sysInfo.length - 1].infoData)

    this.$store.commit('sysInfoPush', {
      id: 'firstPage' + this.openFirstPageCount,
      title: 'userTalk',
      infoData: '啦啦啦，我进来' + this.openFirstPageCount + '次了',
      order: oldsysLenth + 1,
      disState: true
    })

    console.log(this.sysInfo.length)
    console.log(this.sysInfo[this.sysInfo.length - 1].infoData)

    this.$store.commit('addState', ['k', '123'])
  },
  components: {
    Swiper
  },
  methods: {
    getTitle () {
      return '激战，守矢现人神VS博丽巫女'
    },
    getTitleText () {
      return '日前，守矢神社现任人气巫女早苗酱拜访博丽神社，在一阵争吵后，幻想乡现存的两位巫女大打出手。据一位不愿透露姓名的鬼族所说，当时的情形是这样的 ...  "那天中午我正在喝酒的时候，早苗来找灵梦谈人间之里信徒的信仰问题，早苗让灵梦一起下山去人间之里进行调查，但灵梦说："吃葡萄不吐葡萄皮不吃葡萄倒吐葡萄皮吃葡萄不吐葡萄皮不吃葡萄倒吐葡萄皮吃葡萄不吐葡萄皮不吃葡萄倒吐葡萄皮吃葡萄不吐葡萄皮不吃葡萄倒吐葡萄皮吃葡萄不吐葡萄皮不吃葡萄倒吐葡萄皮吃葡萄不吐葡萄皮不吃葡萄倒吐葡萄皮..." " '
    },
    getSwiperImg () {
      const orginPath = '/swiperImg/'
      let imgsPathString = ''
      for (let i = 1; i <= 5; i++) {
        imgsPathString += orginPath + i + '.png,'
      }
      return imgsPathString.slice(0, imgsPathString.length - 1).split(',')
    }
  }
}
</script>

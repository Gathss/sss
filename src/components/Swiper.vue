<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- 轮播元素 -->
            <!-- <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div> -->
            <slot></slot>
        </div>
        <!-- 如果需要分页 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

         <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</template>

<script>
import Swiper from 'swiper'// 引入js
import 'swiper/dist/css/swiper.min.css'// 引入css

export default {
  props: ['myclassName', 'isPagination', 'isLoop'],
  mounted () {
    var mySwiper = new Swiper('.' + this.myclassName, {
      init: false, // 初始化选项
      // direction: 'vertical', // 垂直切换选项
      loop: this.isLoop, // 循环模式选项

      autoplay: { // 自动轮播
        delay: 4000
      },

      // 如果需要分页器
      pagination: {
        el: this.isPagination ? '.swiper-pagination' : ''
      }

      // // 如果需要前进后退按钮
      // navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      // },

      // // 如果需要滚动条
      // scrollbar: {
      //     el: '.swiper-scrollbar',
      // },
    })
    mySwiper.init() // 初始化实例
  }
}
</script>

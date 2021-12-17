<template>
    <header>
        <nav class="clear">
            <h3> 网站名称 </h3>
            <ul>
                <!-- router-link 路由声明式导航 to="跳转地址" tag="渲染标签，默认为a标签" active-class="选中时的样式" exact 路由精确匹配模式 -->
                <router-link to="/" tag="li" active-class="myactive" exact>
                    <i class="iconfont icon-JC_001"></i>
                    Home
                </router-link>
                <router-link to="/FirstPage" tag="li" active-class="myactive" >FirstPage</router-link>
                <router-link to="/MessagePage" tag="li" active-class="myactive" >MessagePage</router-link>
                <router-link to="/UserPage" tag="li" active-class="myactive" >UserPage</router-link>
            </ul>
            <!-- <video loop="" src="blob:https://www.bilibili.com/1d3eb599-2973-411d-9991-1d825fb7125f" style="object-fit: cover; transform: scale(1) translate(0px, 0px) rotate(0deg);" data-height="180" data-width="1920"></video> -->
        </nav>
    </header>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.clear::after{
    font-size: 0;
    height: 0;
    visibility: hidden;
    content: '';
    display: block;
    clear: both;
}

// .myactive{
//     color: red;
// }

nav{
    padding: 30px;
    // height: 155px;
    min-height: 90px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);

    video{
        width: 100%;
        height: 100%;
    }

    h3{
        float: left;
        margin: 0 10px;
    }

    ul{

        float: right;
        margin: 0 10px;

        li{
            list-style: none;
            display: inline-block;
            margin: 0 10px;
            font-size: 16px;
            height: 30px;
            line-height: 30px;

            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;

            &:nth-of-type(3)::before{
                content: " ";
                display: inline-block;
                height: 16px;
                width: 16px;
                background: url(../assets/logo.png) no-repeat;
                background-size: 100%;
                position: relative;
                top:3px;
            }
        }

        .myactive {
            color: #42b983;
        }
    }
}
</style>

<script lang="ts">
// import axios from 'axios'
export default {
  name: 'BilibiliTagNav',
  components: {

  }
}
</script>

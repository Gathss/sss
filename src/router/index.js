import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/FirstPage.vue'
import MessagePage from '../views/MessagePage.vue'
import UserPage from '../views/UserPage.vue'
import TextList from '@/views/FirstPage/TextList.vue'
import ImgList from '@/views/FirstPage/ImgList.vue'
import TableCom from '@/views/FirstPage/TableCom.vue'
import Detail from '@/views/Detail.vue'

Vue.use(VueRouter)

const routes = [

  // 一级路由
  {
    path: '/FirstPage',
    component: FirstPage,
    children: [
      // 二级路由
      {
        path: 'TextList',
        name: 'TextList',
        component: TextList
      },
      {
        path: 'ImgList',
        name: 'ImgList',
        component: ImgList
      },
      {
        path: 'TableCom',
        name: 'TableCom',
        component: TableCom
      },
      // 二级路由重定向，设置默认路由路径
      {
        path: '',
        redirect: '/FirstPage/TextList'
      }]
  },
  {
    path: '/MessagePage',
    name: 'MessagePage',
    component: MessagePage
  },
  {
    // 动态路由
    path: '/Detail/:myId',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/UserPage',
    name: 'UserPage',
    component: UserPage
  },
  // 原网页内容
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 重定向
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const ath = {
  isLogin () {
    return true
  }
}
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 路由地址检测
  if (to.path === '/UserPage') {
    console.log('登录后进入')

    // 检测是否登录
    if (ath.isLogin()) {
      // 放行
      next()
    } else {
      // 未登录进入登录页
      next('/Login')
    }
  } else {
    next()
  }
})

export default router

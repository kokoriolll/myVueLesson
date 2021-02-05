import Vue from 'vue'
import Router from 'vue-router'
import One from '../components/One.vue'
import Two from '../components/Two.vue'
import Home from '../components/default.vue'

Vue.use(Router)

const routes = [
  // 路由重定向 默认显示Home页面
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/one', component: One },
  { path: '/two', component: Two }
]

const router = new Router({
  routes // (缩写) 相当于 routes:routes
})

export default router

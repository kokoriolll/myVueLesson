import Vue from 'vue'
import VueRouter from 'vue-router'
import demo2 from "../demo2"
import demo1 from "../demo1"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "App",
    redirect: "/demo1"
  },
  {
    path: "/demo1",
    name: "demo1",
    component: demo1
  },
  {
    path: "/demo2",
    name: 'demo2',
    component: demo2
  },
  /*{
    path:"/swiper",
    name:"swiper",
    component: swiper
  }*/
]

const router = new VueRouter({
  routes
})

export default router

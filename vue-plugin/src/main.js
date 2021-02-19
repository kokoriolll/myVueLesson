import Vue from 'vue'
import App from './App.vue'

import loading from "./plugin/loading/index";
/*import loading from "./components/loading";*/

/*Vue.component(loading.name,loading)*/

// 注意点: 如果想通过use的方式来注册组件, 那么必须先将组件封装成插件
Vue.use(loading)

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from "vue"
import App from "./App.vue"
import router from './router'

// 1.完整导入饿了么UI和样式
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'

// 只引用部分插件
import {Button,Switch,Row,Rate,DatePicker} from "element-ui";



// 2.告诉VUE，项目中使用饿了么UI
//Vue.use(ElementUI);

// 2.告诉VUE，项目中使用饿了么UI某个插件
Vue.use(Row);
Vue.use(Rate);
Vue.use(Button);
Vue.use(Switch);
Vue.use(DatePicker);

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})
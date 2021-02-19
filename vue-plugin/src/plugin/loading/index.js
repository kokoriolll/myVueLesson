import Vue from "vue";
import loading from "./loading";

export default {
    // 注意点:如果要将一个组件封装成一个插件，那么必须提供一个install方法
    //        那么必须在install方法中注册当前的这个组件
    install:function () {
        Vue.component(loading.name,loading)
    }
}
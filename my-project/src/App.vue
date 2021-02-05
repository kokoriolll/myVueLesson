<!-- template用于编写当前组件的结构代码 -->
<template>
    <div id="app">
      <!--123
      <p>{{msg}}</p>
      <button @click="say">点击Say</button>-->
      <router-link to="/one" tag="button">我是第一个页面</router-link>
      <router-link to="/two" tag="button">我是第二个页面</router-link>
      <router-view></router-view>
      <!--<button @click="getName">获取共享数据</button>-->
    </div>
</template>

<!-- script用于编写当前组件的业务代码 -->
<script>
/* import One from './components/One.vue'
import Two from './components/Two.vue' */
export default {
  name: 'App',
  data: function () {
    return {
      msg: '第一个Vue-Cli项目'
    }
  },
  methods: {
    say () {
      console.log('say')
    },
    getName () {
      console.log(this.$store.state.name)
    }
  },
  components: {
    /* one: One,
    two: Two */
  }
}
</script>

<!-- style用于编写当前组件的样式代码 -->
<style scoped>
  /*p {
    background: skyblue;
  }*/
</style>

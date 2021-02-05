<template>
    <div>
      <p>我是第一个子组件</p>
      <!--<button @click="getName">获取共享数据</button>-->
    </div>
</template>

<script>
export default {
  name: 'One',
  methods: {
    getName () {
      console.log(this.$store.state.age)
    }
  }
}
</script>

<!-- 注意点：默认情况下组件中的style中设置的样式是全局的样式 -->
<!-- 设置scoped属性代表 style中设置的样式只在本组件中生效 -->
<style scoped>
  p {
    background: #42b983;
  }
</style>

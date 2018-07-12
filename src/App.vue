<template>
  <div id="app">
    <div>下面是图片，我是固定的，不会随路由改变而改变</div>
    <img src="./assets/img/logo.png">
    <div>下面路由跳转两种方式</div>
    <router-link to="/">首页</router-link>
    <router-link to="/first">Go to First</router-link>
    <button @click="toFirst">Go to First</button>
    <br><br><br><br><br>
    <!-- 路由视口 -->
    <div>下面是路由视口</div>
    <router-view/>
    <div id="loading">loading...</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toFirst () {
      this.$router.push('first')
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#loading {
  display: none;
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  line-height: 80px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

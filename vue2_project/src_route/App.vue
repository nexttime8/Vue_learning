<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Home /> -->
    <div class="nav">
      <router-link to="/home" active-class="active">home</router-link>
      <!--想对router-link标签添加样式，需要写a标签-->
      <router-link replace to="/about" active-class="active">about</router-link
      ><!--点击about之后，会替换-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
}
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
a {
  width: 50px;
  height: 20px;
  margin-left: 20px;
  text-decoration: none;
  font-size: 20px;
  background-color: #d9e9f0;
  border-radius: 10%;
  padding: 10px;
}
a.active {
  background-color: #9abed6;
}
</style>

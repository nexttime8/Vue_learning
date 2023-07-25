<template>
  <div>
    <div class="nav">
      <router-link to="/about/news" active-class="active">News</router-link>
      <router-link to="/about/info" active-class="active">Info</router-link>
    </div>
    <keep-alive include="infoComponent">
      <!--或者:include="['Info','News']"-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
}
</script>

<style scoped lang="css">
.nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>

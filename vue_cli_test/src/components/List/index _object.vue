<template>
  <div class="row">
    <!-- 列表展示 -->
    <div class="card" v-for="user in users" v-show="users.length" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img v-show="isImageLoaded(user.avatar_url)" :src="user.avatar_url" style='width: 100px' @load="onImageLoad(user.avatar_url)"/>
        <img v-show="!isImageLoaded(user.avatar_url)" style='width: 100px' src="../List/images/loading.gif">
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 欢迎词 -->
    <h2 v-show="info.isFirst">welcome to search</h2>
    <!-- 出错 -->
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
    <!-- 加载中 -->
    <h2 v-show="info.isShow">加载中</h2>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      users: [],
      info: {
        isFirst: true,
        errMsg: '',
        isShow: false,
      },
      loadedImages: {},
    };
  },
  methods: {
    getUserInfo(value, dataObj) {
      this.users = value;
      this.info = { ...this.info, ...dataObj };
      this.loadedImages = this.users.reduce((acc, user) => {
        acc[user.avatar_url] = false;
        return acc;
      }, {});
    },
    onImageLoad(url) {
      this.$set(this.loadedImages, url, true); // 使用 $set 方法更新属性
    },
    isImageLoaded(url) {
      return this.loadedImages[url] || false;
    },
  },
  mounted() {
    this.$bus.$on("getUserInfo", this.getUserInfo);
  },
};
</script>

<style scoped>
</style>

<template>
  <div class="row">
    <!-- 列表展示 -->
    <div class="card" v-for="user in users" v-show="users.length">
      <a :href="user.html_url" target="_blank">
        <img v-lazy="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
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
  name: '',
  data() {
    return {
      users: [],
      info: {
        isFirst: true,
        errMsg: '',
        isShow: false,
      },
    };
  },
  mounted() {
    this.$bus.$on('getUserInfo', this.getUserInfo);
  },
  methods: {
    getUserInfo(value, dataObj) {
      this.users = value;
      this.info = { ...this.info, ...dataObj };
    },
  },
};
</script>

<style scoped>
</style>

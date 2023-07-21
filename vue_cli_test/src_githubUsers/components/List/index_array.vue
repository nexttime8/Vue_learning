<template>
  <div class="row">
      <!-- 列表展示 -->
      <div class="card" v-for="user in users" v-show="users.length" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img v-show="isImageLoaded(user.login)" :src="user.avatar_url" style='width: 100px' @load="onImageLoad(user.login)"/>
          <img v-show="!isImageLoaded(user.login)" style='width: 100px' src="../List/images/loading.gif">
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
    name:"",
    data(){
      return {
        users:[],
        info:{
          isFirst:true,
          errMsg:'',
          isShow:false,
        },
        loadedImages: [],
      }
    },
    methods:{
      getUserInfo(value,dataObj){
        this.users = value
        this.info = {...this.info,...dataObj}
        this.loadedImages = this.users.map((user) => ({ // 生成加载出来的图片的对象数组
          login: user.login,
          isLoaded: false,
        }));
      },
      onImageLoad(login) {
        const image = this.loadedImages.find((img) => img.login === login); // 找第一个
        if (image) {
          this.$set(image, 'isLoaded', true); // 使用 $set 方法更新属性
          // this.$forceUpdate(); // 强制重新渲染组件
        }
      },
      isImageLoaded(login) {
        const image = this.loadedImages.find((img) => img.login === login);
        return image ? image.isLoaded : false;
      },
    },
    mounted(){
      this.$bus.$on('getUserInfo',this.getUserInfo)
    }
}
</script>

<style  scoped>
</style>
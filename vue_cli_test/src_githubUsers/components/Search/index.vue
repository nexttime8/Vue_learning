<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="userName" @keyup.enter="getInfo"/>&nbsp;<button @click="getInfo">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:"",
    data(){
      return {
        userName:''
      }
    },
    methods:{
      getInfo(){
        if(this.userName.trim()==='') return
        // 请求更新前的加载中写在请求外面
        this.$bus.$emit('getUserInfo',[],{
            isFirst:false,
            isShow:true,
            errMsg:''
          })
          // 这里根本就还没有开始加载，设置为false毫无意义
        // this.$bus.$emit('onImageLoad',false)
        axios.get(`https://api.github.com/search/users?q=${this.userName}`).then((response)=>{
          this.$bus.$emit('getUserInfo',response.data.items,{
            // isFirst:false,
            isShow:false,
            errMsg:''
          })
          // 这里确实是加载成功
          // this.$bus.$emit('onImageLoad',true)
          // console.log("获取成功")
        }).catch((error)=>{
          this.$bus.$emit('getUserInfo',[],{
            // isFirst:false,
            isShow:false,
            errMsg:error.message
          })
        })
      }
    }
}
</script>

<style>

</style>
<template>
  <div>
    <h2>{{$store.state.sum}}</h2>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increament">加</button>
    <button @click="decreament">减</button>
    <button @click="oddIncreament">是奇数就加</button>
    <button @click="delayIncreament">过一会儿再加</button>
  </div>
</template>

<script>
export default {
    name:"",
    data(){
      return {
        n:1
      }
    },
    methods:{
      increament(){
        this.$store.commit('JIA',this.n)
      },
      decreament(){
        this.$store.commit('JIAN',this.n)
      },
      oddIncreament(){
        this.$store.dispatch('oddJIA',this.n)
      },
      delayIncreament(){
        this.$store.dispatch('delayJIA',this.n)
      }
    }
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>
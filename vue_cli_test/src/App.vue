<template>
  <div>
    <BlogHeader/>
    <router-view></router-view>
    <BlogFooter/>
  </div>
</template>

<script>
// import BlogHeader from '@/components/BlogHeader'
// import BlogFooter from '@/components/BlogFooter'
export default {
    name:"BlogWeb",
    components:{
      // BlogFooter,
      // BlogHeader,
    }
}
</script>

<style>

</style>
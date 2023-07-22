<template>
    <div class="container">
        <!-- 写在components里面的可以直接用 -->
        <Search/>
        <BlogList/>
        <BlogListFoot/>
    </div>
</template>

<script>
import Search from '@/views/Blog/Search'
import BlogList from '@/views/Blog/BlogList'
import BlogListFoot from '@/views/Blog/BlogListFoot'
export default {
    name:"",
    components:{
        Search,
        BlogList,
        BlogListFoot,
    }
}
</script>

<style scoped lang="css">

</style>
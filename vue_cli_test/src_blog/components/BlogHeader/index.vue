<template>
    <div class="container">
        <h1>学习分享站</h1>
        <ul>
           <li v-for="nav in navs" :key="nav.name">
                <router-link v-if="nav.isRoute" :to="nav.to">{{ nav.name }}</router-link>
                <a v-else :href="nav.to" target="_blank">{{ nav.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"BlogHeader",
    data(){
        return {
            navs:[
            {
                name:"主页",
                to:"/home",
                isRoute:true
            },
            {
                name:"博客",
                to:"/blog",
                isRoute:true // 搞半天因为这里写错了，幸好用@click对router-link和标签进行了测试
            },
            {
                name:"标签",
                to:"/tag",
                isRoute:true
            },
            {
                name:"项目",
                to:"https://github.com/nexttime8",
                isRoute:false
            },
            {
                name:"Github",
                to:"https://github.com/nexttime8",
                isRoute:false
            },
            {
                name:"关于",
                to:'/about',
                isRoute:true
            }
        ]
        }
    },
    methods:{
        cons(value){
            console.log(value)
        }
    }
}
</script>

<style scoped>

    .container {
        display: flex;
        justify-content: space-around;
    }
    
    h1,a{
        font-family: 'Franklin Gothic Medium','Roboto', 'Lato' ,'Arial Narrow', Arial, serif;
        color: aquamarine;
    }

    h1{
        font-weight: 700;
    }

    ul {
        display: inline-flex;
        float: left;
        list-style: none;
        margin-top: 30px;
        padding-left: 0;
    }

    li:before {
        content: "🤍"; /* 使用自定义符号，可以是字体图标或其他Unicode字符 */
        margin-right: 4px;
    }

    li{
        margin-left: 20px;
        cursor: pointer;
        font-weight: 600;
        font-size: large;
    }

    a{
        text-decoration: none;
    }

    router-link:hover,a:hover{
        color: #50c9c3;
    }
</style>
// 要使用路由对应的组件，首先需要在 router/index.js（或其他自定义的路由配置文件）中定义路由表。路由表是一个数组，每个路由对象都包含了路由的路径和对应的组件。
// 定义了路由：/search。当用户访问 /search 路径时，会加载 Search 组件，并在页面中显示该组件的内容

import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Tag from "@/views/Tag"
Vue.use(VueRouter)

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/home",
      component: Home, // 这里不要引号也不要大括号
    },
    {
      path: "/tag",
      component: Tag,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
})

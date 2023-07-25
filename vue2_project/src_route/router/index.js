import Vue from "vue"
import VueRouter from "vue-router" // npm install --save vue-router@3
Vue.use(VueRouter)

import Home from "@/components/Home"
import About from "@/components/About"
import News from "@/components/News"
import Info from "@/components/Info"
import Message from "@/components/Message"
import Detail from "@/components/Detail"
import Other from "@/components/Other"

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "message",
          component: Message,
          meta: {
            keepAlive: true,
          },
          children: [
            {
              path: "detail/:id/:title", // ***
              component: Detail,
            },
          ],
        },
        {
          name: "Otheromponent",
          path: "other",
          component: Other,
        },
      ],
    },
    {
      path: "/about",
      component: About,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "info",
          component: Info,
        },
      ],
    },
  ],
})

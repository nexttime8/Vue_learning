import Vue from "vue"
import App from "@/App.vue"

import router from "@/router"

import BlogHeader from "@/components/BlogHeader"
import BlogFooter from "@/components/BlogFooter"

import "./assets/style.css"

Vue.component(BlogHeader.name, BlogHeader)
Vue.component(BlogFooter.name, BlogFooter)

Vue.config.productionTip = false

new Vue({
  name: "#app",
  router,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount("#app")

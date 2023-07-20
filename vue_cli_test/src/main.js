import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

import { Lazyload } from "vant"

new Vue({
  name: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount("#app")

// 不这样，访问的将是http://localhost:8000/components/List/images/loading.gif，无
import loadingImg from "@/components/List/images/loading.gif"

Vue.use(Lazyload, {
  // 配置项
  loading: loadingImg, // 加载中的占位图
})

import Vue from "vue"
import App from "@/App.vue"


Vue.config.productionTip = false

import { gsap } from "gsap"
import imagesLoaded from "imagesloaded"

Vue.use(gsap)
Vue.use(imagesLoaded)

new Vue({
  name: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount("#app")

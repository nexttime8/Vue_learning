import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

new Vue({
  name:"#app",
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
}
}).$mount("#app")

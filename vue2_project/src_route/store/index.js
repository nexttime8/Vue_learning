import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import aboutOptions from "@/router/about"
import homeOptions from "@/router/home"

export default new Vuex.Store({
  modules: {
    aboutOptions,
    homeOptions,
  },
})

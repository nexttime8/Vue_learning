import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  sum: 0,
}
const mutations = {
  JIA(context, value) {
    // console.log(context)
    context.sum += value
  },
  JIAN(context, value) {
    // console.log(context)
    context.sum -= value
  },
  // ODDJIA(context, value) {
  //   context.sum += value
  // },
  // DELAYJIA(context, value) {
  //   context.sum += value
  // },
}
const actions = {
  oddJIA(context, value) {
    if (context.state.sum % 2) {
      context.commit("JIA", value)
    }
  },
  delayJIA(context, value) {
    setTimeout(() => {
      context.commit("JIA", value)
    }, 500)
  },
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
})

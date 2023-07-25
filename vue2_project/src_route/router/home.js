const state = {
  sum: 1,
}
const actions = {}
const mutations = {
  INCREAMENT(context, value) {
    // context,value
    // console.log("INCREAMENT", context, value)
    context.sum += value // 这里明明可以直接用state，为什么要有context？
  },
  DECREAMENT(context, value) {
    context.sum -= value
  },
}
const getters = {
  bigSum() {
    return state.sum * 10
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}

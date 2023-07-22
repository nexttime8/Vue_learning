// store.js
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  currentCardIndex: 0,
}

const mutations = {
  INCREAMENTTWO(context, value) {
    context.currentCardIndex = (context.currentCardIndex + value) % 3
  },
}

const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})

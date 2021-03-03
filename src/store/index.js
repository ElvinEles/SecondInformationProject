import Vue from 'vue'
import Vuex from 'vuex'

import category from './modules/category'
import information from './modules/information'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category,
    information
  }
})

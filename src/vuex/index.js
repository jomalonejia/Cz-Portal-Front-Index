import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'
import collections from '@/pages/collections/vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    layout,
    collections
  }
})

export default store

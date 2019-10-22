

import Vue from 'vue'
import home from './home/layoutstore'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        home:home
      }
  })
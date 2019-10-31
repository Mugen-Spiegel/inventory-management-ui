

import Vue from 'vue'
import home from './home/layoutstore'
import authentication from './Authentication/Authentication'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        home:home,
        authentication:authentication
      }
  })
// src/main.js

import Vue from 'vue'
import App from './App'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import { store } from './store/index'


new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
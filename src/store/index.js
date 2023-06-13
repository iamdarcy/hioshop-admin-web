// import Vue from 'vue'
// import getters from './getters'
// import app from './modules/app'
// import settings from './modules/settings'
// import user from './modules/user'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     app,
//     settings,
//     user
//   },
//   getters
// })

// export default store

import Vuex from 'vuex'
import Vue from 'vue'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

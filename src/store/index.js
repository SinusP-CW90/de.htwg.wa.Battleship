import {store} from 'quasar/wrappers'
import {createStore} from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  },
  actions: {
    async login({commit}, details) {
//
    },
    async register({commit}, details) {
//
    },
    async logout({commit}) {
//
    },
  }
})


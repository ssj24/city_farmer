import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    userId: 0,
    userName: ''
  },
  mutations: {
    isLogin: state => {
      state.isLogin = true
    },
    startLogin(state, data) {
      state.userId = data.userId
      state.userName = data.userName
    },
    isLogout: state => {
      state.isLogin = false
    }
  },
  actions: {
  },
  modules: {
  }
})

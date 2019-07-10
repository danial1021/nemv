import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    sb: {
      act: false,
      msg: '',
      color: 'error'
    },
    user: {
      name: '사용자',
      img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
      id: ''
    }
  },
  mutations: {
    getToken (state, user) {
      state.token = localStorage.getItem('token')
      console.log(user)
      state.user = user
    },
    delToken (state) {
      localStorage.removeItem('token')
      state.token = null

      // 초기값
      state.user = {
        name: '사용자',
        img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
        id: ''
      }
    },
    pop (state, d) {
      state.sb.msg = d.msg
      state.sb.color = d.color
      state.sb.act = false
      if (d.act === undefined) state.sb.act = true
    }
  },
  actions: {

  }
})

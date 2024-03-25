import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    title: '大标题',
    count: 100
  },
  // 此处定义mutations
  mutations: {
    addCount (state) {
      state.count += 1
    },
    addFive (state) {
      state.count += 5
    },
    changeTitle (state) {

    }

  }
})

export default store

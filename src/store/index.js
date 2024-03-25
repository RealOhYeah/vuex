import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    title: '仓库大标题',
    count: 100
  },
  // 此处定义mutations
  mutations: {
    // 用于传单个参数
    // addCount (state, n) {
    //   state.count += n
    // },

    // 这里传多个参数
    addCount (state, obj) {
      state.count += obj.count
    },

    changeTitle (state, newTitle) {
      state.title = newTitle
    },

    subCount (state, obj) {
      state.count -= obj.count
    },
    // 这里mapMutations展开
    subCountTwo (state, n) {
      state.count -= n
    },

    changeCount (state, newCount) {
      state.count = newCount
    }

  }
})

export default store

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

    // 这里用来修改数据
    changeCount (state, newCount) {
      state.count = newCount
    }

  },
  // 3. actions 处理异步
  // 注意：不能直接操作 state，操作 state，还是需要 commit mutation
  actions: {
    // context 上下文 (此处未分模块，可以当成store仓库)
    // context.commit('mutation名字', 额外参数)
    changeCountAction (context, num) {
      // 这里是setTimeout模拟异步，以后大部分场景是发请求
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  }
})

export default store

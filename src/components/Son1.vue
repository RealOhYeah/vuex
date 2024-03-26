<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: <label></label>
      <br>
      <button @click="handleAdd(1)">值 + 1</button>
      <button @click="handleAdd(5)">值 + 5</button>
      <button @click="changeFu('小标题')">小标题</button>
      <button @click="handleChange">一秒后修改为666</button>
      <hr>
      <div>{{ $store.state.list }}</div>
      <div>{{ $store.getters.filters }}</div>

      <hr>
      <!-- 测试访问模块中的state - 原生 -->
      <div>{{ $store.state.user.userInfo.name }}</div>
      <!-- 此处分模块 -->
      <button @click="updateUser">更新个人信息</button>
      <button @click="updateUser2">一秒后更新信息</button>

      <div>{{ $store.state.setting.theme }}</div>
      <!-- 此处分模块 -->
      <button @click="updateTheme">更新主题色</button>

      <hr>
      <div>{{ $store.getters['user/UpperCaseName'] }}</div>

    </div>
  </template>

<script>
export default {
  name: 'Son1Com',

  created () {
    console.log(this.$store.getters)
  },

  methods: {

    updateUser2 () {
      this.$store.dispatch('user/setUserSecond', {
        name: 'xiaohong',
        age: 28
      })
    },
    updateUser () {
      this.$store.commit('user/setUser', {
        name: 'xiaowang',
        age: 25
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    },
    handleChange () {
      // 调用action
      // this.$store.dispatch('action名字', 额外参数)
      this.$store.dispatch('changeCountAction', 666)
    },

    handleAdd (n) {
      // this.$store.state.count++
      // console.log(this.$store.state.count)

      // 这里传单个参数
      // this.$store.commit('addCount', n)

      // 这里传多个参数
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    changeFu (newTitle) {
      this.$store.commit('changeTitle', newTitle)
    }

  }
}
</script>

  <style lang="css" scoped>
  .box{
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
  </style>

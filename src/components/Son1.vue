<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: <label></label>
      <br>
      <button @click="handleAdd(1)">值 + 1</button>
      <button @click="handleAdd(5)">值 + 5</button>
      <button @click="changeFu('小标题')">小标题</button>
      <button @click="handleChange">一秒后修改为666</button>

    </div>
  </template>

<script>
export default {
  name: 'Son1Com',

  methods: {

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

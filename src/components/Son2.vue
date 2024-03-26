<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值:<label>{{ count }}</label>
      <br />
      <button @click="subtractionCount(1)">值 - 1</button>
      <button @click="subtractionCount(5)">值 - 5</button>
      <button @click="changeCountAction(888)">一秒后修改为888</button>
      <hr>
      <div>{{ filters }}</div>

    </div>
  </template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['filters'])
  },
  methods: {
    ...mapMutations(['subCount', 'subCountTwo']),
    ...mapActions(['changeCountAction']),
    subtractionCount (n) {
      // 这里是传统方法调用
      // this.$store.commit('subCount', {
      // count: n,
      //  msg: '减法'
      // })

      // 这里mapMutations展开(传多个参数)
      this.subCount({
        count: n,
        msg: '减法'
      })

      // 这里mapMutations展开(传单个参数)
      // this.subCountTwo(n)
    }
  }

}
</script>

  <style lang="css" scoped>
  .box {
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
  </style>

<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: <label></label>
      <br>
      <button @click="handleAdd">值 + 1</button>
      <button @click="handleAddFive">值 + 5</button>
    </div>
  </template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    handleAdd () {
      // this.$store.state.count++
      // console.log(this.$store.state.count)

      this.$store.commit('addCount')
    },
    handleAddFive () {
      console.log(this.$store.state.count)
      this.$store.commit('addFive')
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

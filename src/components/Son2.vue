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
      <hr>

      <!-- //这里使用默认方式从store中拿到挂载的模块对象 -->
      <div>{{  user.userInfo.name }}</div>
      <div>{{ setting.theme }}</div>

      <!-- //这里通过modules中直接引入,通过辅助函数方式访问 -->
      <div>user模块数据:{{ userInfo }}</div>
      <button @click="setUser({name:'xiaoming',age:80})">更新个人信息</button>
      <button @click="setUserSecond({name:'xiaoli',age:80})">一秒后更新个人信息</button>

      <div>setting模块数据:{{ theme }} - {{ desc }}</div>
      <button @click="setTheme('skyblue')">更新主题</button>

      <hr>
      <!-- 访问模块中的getters -->
      <div>{{ UpperCaseName }}</div>

    </div>
  </template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filters']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    ...mapMutations(['subCount', 'subCountTwo']),
    ...mapActions(['changeCountAction']),

    // 分模块映射
    ...mapMutations('setting', ['setTheme']),
    ...mapMutations('user', ['setUser']),
    ...mapActions('user', ['setUserSecond']),

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

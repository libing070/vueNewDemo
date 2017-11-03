
<template lang="html">
 <div class="panel panel-default">
  <div class="panel-heading">
   <h1 class="text-center">已有时长</h1>
  </div>
  <div class="panel-body">
   <h1 class="text-center">{{ time }}小时</h1>
  </div>
</div>
</template>

<script>
  export default {
    name : 'Sidebar',
    data () {
      return {
      }
    },
    //computed是vue的计算属性
    computed : {
      time(){  //es6的简写方式 函数
        //vue.use(Vuex) this $store 对象
        //全局的数据， 在组件里引用  this.$store
        //获取全局的state 某个状态 不能直接修改它
        return this.$store.state.totalTime;
      }
    }
  }
</script>

<style lang="css">
</style>

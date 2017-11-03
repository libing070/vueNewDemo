
<template>
  <div id="wrapper">
    <!--导航-->
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!--  分为左右两部分 侧边栏左边  内容在右边切换改变 bootstrap默认是12列  即侧边栏占三列 右边内容占9列-->
    <div class="container">
      <div class="col-sm-3"><!--左边 侧边栏-->
         <sidebar></sidebar><!--vue 侧边栏必须用sidebar这个组件  下面import 引入组件名字也不能变 首字母可大写-->
      </div>
      <div class="col-sm-9"><!--右边 内容-->
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  export default {
    name : 'app',
     components:{
      Sidebar
     }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//前段路由 SPA Single Page Application 单页应用
import VueRouter from 'vue-router'
//ajax
import VueResource from 'vue-resource'
//页面 由多个组件组成vm 树根 数据管理中心（相当于超市  什么都有）
import store from './store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'

Vue.use(VueRouter)
Vue.use(VueResource)


const routes = [{
  path : '/',
	component : Home
},{
	path : '/home',
	component  : Home
},{
  path : '/time-entries',
  component  : TimeEntries,
  children:[{
    path:'/time-entries/log-time',
    component:LogTime
  }]
}
]

const router = new VueRouter({
	routes
});

/* eslint-disable no-new */
var app=new Vue({
  el: '#app',/*根目录下index.html中id='app'*/
  router,/*组件插入路由*/
  store,/*组件插入数据流的功能*/
  ...App  /*或者render:h=>h(App)  或者  template: '<App/>', components: { App }*/
})

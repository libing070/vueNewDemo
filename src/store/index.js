/* eslint-disable */
//数据中心
import Vue from 'vue'
//vues 是vue 第三方插件 周边生态 数据流  数据改变的动作，通信 （负责打理数据）
//将Vuex 的逻辑全部写在index.js   main.js里没有任何vuex代码
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);

//状态集合，全局管理的引起界面状态改变的值
const state={
  totalTime:0,
  list:[]
}
export default new Vuex.Store({
  state,/*状态机制   树 isShow v-show*/
  mutations,/*改变  IS_DIV_SHOU IS_DIV_HIDE*/
  actions /*动作  组件不能直接改变state,要先声明一下*/
})

/* eslint-disable */
//集合72变
import * as types from './mutation-types'
export  default {
  //types表示mutation-types
  [types.ADD_TOTAL_TIME](state,time){
    state.totalTime= parseInt(state.totalTime) + parseInt(time);
  },
  [types.DEC_TOTAL_TIME](state,time){
    state.totalTime = parseInt(state.totalTime) - parseInt(time);
  },
  [types.SAVE_PLAN](state,plan){
    state.list.push(plan);
  },
  [types.DELETE_PLAN](state,idx){
    state.list.splice(idx,1);
  }

}


<template lang="html">
	<div>
	    <router-link class="btn btn-primary"
	       v-if="$route.path !=='/time-entries/log-time'"
	       to="/time-entries/log-time">创建</router-link>
	       <div   v-if="$route.path =='/time-entries/log-time'"><h3>创建</h3></div>
	       <hr>
	       <router-view></router-view>
	       <div class="time-enreies">
	             <p v-if="!plans.length">
	                 <strong>还没有任何计划</strong>
               </p>
               <div class="list-group">
                     <a v-for="(plan,index) in plans" class="list-group-item">
                 <div class="row">
               <div class="col-sm-2 user-details">
                 <img :src="plan.image" class="avatar">
                 <p class="text-center">
                   <strong>{{plan.name}}</strong>
                 </p>
               </div>
               <div class="col-sm-2 text-center time-block">
                    <h3 class="list-group-item-text total-time">
                    <i class="glyphicon glyphicon-time"></i>
                    {{plan.totalTime}}</h3>
                    <P class="label label-primary text-center">
                      <i class="glyphicon glyphicon-calendar"></i>
                      {{plan.date}}
                    </P>
               </div>
                 <div class="col-sm-7 comment-section">
                 <p>{{plan.comment}}</p>
                 </div>
                 <div class="col-sm-1">
                   <button @click="deletePlan(index)" class="btn btn-xs btn-danger delete-button">x</button>
                 </div>
                 </div>
                 </a>
              </div>
          </div>
  </div>
</template>

<script>
  export default {
    'name' : 'TimeEnties',
    computed : {
      plans (){
        return this.$store.state.list;
      }
    },
    data () {
      return {
      }
    },
    methods : {
      deletePlan(idx){
        console.log(typeof idx);
        this.$store.dispatch('decTotalTime',this.plan[idx].totalTime);
        this.$store.dispatch('deletePlan',idx);
      }
    }
  }
</script>

<style lang="css">
  .avatar {
    height:75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details{
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section{
    padding:20px;
  }
</style>

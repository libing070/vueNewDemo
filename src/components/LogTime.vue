<template lang="html">
  <div class="form-horizontal">
   <div class="form-group">
     <div class="col-sm-6">
      <label for="">日期</label>
       <input type="date" v-model="date" placeholder="请输入日期" class="form-control"/>
     </div>
     <div class="col-sm-6">
       <label>时间</label>
        <input type="number" v-model="totalTime" placeholder="Hours" class="form-control"/>
      </div>
   </div>
    <div class="form-group">
      <div class="col-sm-12">
       <label for="">备注</label>
       <input type="text" v-model="comment" placeholder="备注" class="form-control"/>
      </div>
    </div>

     <button class="btn btn-primary" @click="save()">保存</button>
     <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
  </div>
</template>

<script>
  export default {
    name : 'LogTime',
    data () {
      return {
        date:'',
        totalTime:'',
        comment:''
      }
    },
    methods:{
      save(){
        //时间安排对象
          const plan={
            name :'libing',
            image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509802973&di=c8e26e2b04622302c6a20088433d3212&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201503%2F07%2F20150307170206_GcmsE.jpeg',
            date:this.date,//哪一天
            totalTime:this.totalTime,
            comment:this.comment
          };
          //actions savePlan
          this.$store.dispatch('savePlan',plan);
          this.$store.dispatch('addTotalTime',this.totalTime);
          this.$router.go(-1)


      }
    }
  }
</script>

<style lang="css">
</style>

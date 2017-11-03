
<template lang="html">
	<div class="jumbotron">
	  <h1>任务追踪</h1>
	   <p>
	    <strong>
	     <router-link to="/time-entries">创建一个任务</router-link>
       </strong>
     </p>
   </div>
</template>

<script>
  //import goods from '../../server/controls/goods'
  export default {
    data () {
      return {
      }
    },methods: {
      // 删除
      handleDelete(row) {
        this.func.ajaxPost(this.api.goodsDelete, {id: row.id}, res => {
          if (res.data.code === 200) {
            let index = this.tableData.indexOf(row);
            this.tableData.splice(index, 1);
            this.$message.success('删除成功');
          }
        });
      },
    }
  }
</script>

<style lang="css">
</style>

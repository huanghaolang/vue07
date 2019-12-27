<template>
<div>
  order 2 ==============

</div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-menu-item-group__title {
    /* padding: 7px 0 7px 20px; */
    padding:0px;
    line-height: normal;
    font-size: 12px;
    color: #030c1d;
}
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
<template>
<div>
 <el-container style="height: 800px; border: 1px solid #eee">
    <elmenu></elmenu>
  <el-container>
    <elheader>

    </elheader>
      <el-header style="text-align: right; font-size: 12px">
      <elkeepalive>
            </elkeepalive>
    </el-header>
    <el-main>
      <router-view></router-view>
       <!--  <elmain>
        
        </elmain>  -->
        
     <!--  <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
      </el-main>
  </el-container>
</el-container>  
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
    color: #909399;
}
  
  .el-aside {
    color: #333;
  }
</style>

<script>
import elmenu from './NarMenu.vue'
import elheader from './NarHeader.vue'
import elkeepalive from './NarKeepAlive.vue'
import elmain from './Main'

var login = {
            template:'<h3>登陆</h3>'
        }
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
        
  }
},components: {
    elmenu,
    elheader,
    elkeepalive,
    elmain,
    login

},method:{
  isCollapse:function(e){

  }
}
}
</script>
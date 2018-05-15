<template>
	<div>
		<div class="addmore">
			<el-button size="big" type="primary" @click="handleDelete(scope.$index, scope.row)">添加</el-button>
		</div>
		
		<el-table :data="tableData3" height="500" border style="width: 100%">
    		<el-table-column prop="date" label="创建日期" >
    		</el-table-column>
    		<el-table-column prop="name" label="用户" >
    		</el-table-column>
    		<el-table-column prop="address" label="权限">
    		</el-table-column>
    		<el-table-column label="操作">
			      	<template slot-scope="scope">
			        <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			        </template>
    		</el-table-column>
  		</el-table>
	</div>
</template>
<style>
	.cell{
		text-align: center;
	}
	.addmore{
		width: 50px;
		margin:20px 0 30px 0 ;
	}
</style>
<script scoped>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
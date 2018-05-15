<template>
	<div class="articlemanage">
		<div class="articlemanage-search">
			<el-input v-model="search" placeholder="请输入搜索内容"></el-input>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
		</div>
		<div class="articlemanage-ifo">
			<el-table :data="tableData" style="width: 100%">
			    <el-table-column label="日期" style="text-align: center">
			      <template slot-scope="scope">
			        <i class="el-icon-time"></i>
			        <span style="margin-left: 10px">{{ scope.row.date }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column label="标题" >
			      <template slot-scope="scope">
			        <el-popover trigger="hover" placement="top">
			          <p>标题: {{ scope.row.name }}</p>
			          <p>内容: {{ scope.row.content }}</p>
			          <div slot="reference" class="name-wrapper">
			            <el-tag size="medium">{{ scope.row.name }}</el-tag>
			          </div>
			        </el-popover>
			      </template>
			    </el-table-column>
			    <el-table-column label="操作">
			      	<template slot-scope="scope">
			      	<el-button type="primary" size="mini" @click="handlecheck(scope.$index, scope.row)">查看</el-button>
			        <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, tableData)">删除</el-button>
			      	</template>
			    </el-table-column>
  			</el-table>
		</div>
	</div>
</template>
<style scoped>
	.el-input{
		width: 50%;
	}
	.articlemanage-ifo{
	}
	.cell{
		text-align: center;
	}
</style>
<script>
	 export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-04',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-01',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-03',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-04',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-01',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-04',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-01',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-04',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-01',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-04',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, {
          date: '2016-05-01',
          name: 'css性能',
          content: 'css性能不能泄漏，注意ssr攻击，css是html样式，测试测试'
        }, 
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$router.push({name:'edit',params:{content:row.content,title:row.name}})
      },
      handleDelete(index, row) {
        row.splice(index,1)
      },
      handlecheck(index,row){
      	this.$router.push({name:'edit',params:{content:row.content,title:row.name}})

      }
    }
  }
</script>

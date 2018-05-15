<template>
	<div class="login">
		<div class="login-img">
			<img src="../assets/headimg.jpg" height="200" width="200">
		</div>
		<div class="login-ifo">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  <el-form-item  prop="name">
			    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
			  </el-form-item>
			  <el-form-item prop="password">
			  	<el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
			  </el-form-item>
			
				<el-form-item>
		    		<el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
		    		<el-button @click="resetForm('ruleForm')">重置</el-button>
		  		</el-form-item>
		  </el-form>
		</div>
		<div class="login-foot">
			欢迎登录<br>@aslan博客后台管理
		</div>
		
	</div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password:''
        },
        rules: {
          name: [
            { required: true, message: '用户名不能空', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
            { pattern:/^[\u4E00-\u9FA5]+$/, message:'用户名只能是中文的'}
          ],
          password: [
            { required: true, message: '密码不能空', trigger: 'blur' },
            { pattern: /^(\w){6,20}$/,message: '只能输入6-20个字母、数字、下划线'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({name:'main',params:{usename:this.ruleForm.name}})
            localStorage.usename=this.ruleForm.name;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
	.login{
		position: fixed;
		width: 100%;
		padding-top:50px; 	
		height: 100%;
		background:url("../assets/login.jpg") center no-repeat;
		background-size: 100% 100%;

	}
	.login-img img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.login-ifo{
		width: 400px;
		height: 300px;
		margin: auto;
		background: rgba(255,255,255,0.3);
		padding-top: 100px;
		
	}
	.el-form-item__content{
		width: 300px;
		margin: auto!important;

	}
	.login-foot{
		color: #040404;
		bottom: 0;
		text-align: center;
		padding-top: 50px;
	}
	.el-form-item__error{
		color: red;
	}
</style>
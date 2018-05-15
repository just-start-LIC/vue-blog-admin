<template>
  <div>
      <el-container>
        <el-header>
            <i class="el-icon-loading" >{{name}}aslan</i>
            <el-dropdown> 
              <span class="el-dropdown-link">
                  嗨，{{name}} <i class="el-icon-setting"></i>
              </span> 
              <el-dropdown-menu slot="dropdown" >
                <router-link @click.native="loginout" to='/' ><el-dropdown-item >退出</el-dropdown-item></router-link>
              </el-dropdown-menu>
            </el-dropdown>
              
        </el-header>
        <el-container>
            <el-aside width="300px">
              <el-row class="tac">
                <el-col :span="12">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-edit"></i>
                        <span>文章管理</span>
                      </template>
                      <el-menu-item-group>
                        <router-link to="/main/edit">
                        <el-menu-item index="1-1">文章写作</el-menu-item>
                        </router-link>
                        <router-link to='/main/articlemanage'>
                        <el-menu-item index="1-2">文章管理</el-menu-item>
                        </router-link>
                      </el-menu-item-group>
                    </el-submenu>
                    <router-link to='/main/comment'>
                    <el-menu-item index="2">
                      <i class="el-icon-view"></i>
                      <span slot="title">评论管理</span>
                    </el-menu-item>
                    </router-link>
                    <router-link to="/main/usemanage">
                    <el-menu-item index="3" >
                      <i class="el-icon-news"></i>
                      <span slot="title">用户管理</span>
                    </el-menu-item>
                    </router-link>
                  </el-menu>
                </el-col>
              </el-row>
            </el-aside>
          <el-container>
            <el-main>
              <transition  v-on:before-enter="beforeenter"  v-on:enter='enter'>
                <router-view/>
              </transition>
            </el-main>
            <el-footer>@aslan博客后台管理中心</el-footer>
          </el-container>
        </el-container>
      </el-container>
      
  </div>
</template>
<script scoped>
  export default {
    created(){
      this.$router.push('/main/comment');

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      loginout(){
        localStorage.clear();
        console.log("1")
      },
      beforeenter:function(el){
        el.style.opacity=0;
      },
      enter:function(el){
        el.style.opacity=1;
        el.style.animation=""
      }
    },
    data(){
      return{
        name:localStorage.usename,

      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color:#409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: relative;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main{
    height:700px;
    position: relative;
  }
  .el-icon-loading:before{
    content:"";
  }
  .el-icon-loading{
    position: absolute;
    top: 20px;
    left:80px;
    color: #fff;
  }
  .el-dropdown{
    position: absolute;
    right:80px;
    color: #fff;
  }
  .el-col-12{
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  .el-footer{
    position:fixed;
    bottom: 0;
    width: 100%;
  }
  @keyframes{
    from{opacity:0}
    to{opacity: 1}
  }
</style>
<template>
  <div class="edit">
    <el-input v-model="biaoti" placeholder="请输入标题"></el-input>
    <button @click="getUEContent()">获取内容</button>
    <div class="edit-container">
      <UE :content=contents :config=config ref="article"></UE>
    </div>
    <div class="edit-submit">
      <el-button type="primary">提交<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
  </div>
</template>
<style scoped>
  .edit-container{
    background: #ddd;
  }
  .edit{
    width:900px;
    height:500px;
    margin:20px auto 70px;
  }
  .edit-submit{
    position: absolute;
    left: 1000px;
    margin-top: 20px;
  }
</style>
<script>
  import UE from '../components/ueditor';
  export default {
    components: {UE},
    data() {
      return {
        contents:'',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        biaoti:'我是一篇文章'
      }
    },
    created(){
      this.contents=this.$route.params.content;
      this.biaoti=this.$route.params.title;
      console.log(this.$route.params.content)
    },
    methods: {
      getUEContent() {
        let content = this.$refs.article.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    }
  };
</script>
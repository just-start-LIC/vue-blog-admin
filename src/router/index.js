import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login'
import main from '@/page/main'
import edit from '@/page/edit'
import articlemanage from '@/page/ArticleManage'
import articlemanagement from '@/page/articlemanagement'
import usemanage from '@/page/usemanage'
import comment from '@/page/comment'
import adduser from '@/page/adduser'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
    	path:'/main',
    	name:'main',
    	component:main,
      children:[
        {
          path:'/main/edit',
          name:'edit',
          component:edit
        },
        {
          path:'/main/articlemanage',
          name:'articlemanage',
          component:articlemanage
        },
        {
          path:'/main/articlemanagement',
          name:'articlemanagement',
          component:articlemanagement
        },
        {
          path:'/main/usemanage',
          name:'usemanage',
          component:usemanage
        },
        {
          path:'/main/comment',
          name:'comment',
          component:comment
        },
        {
          path:'/main/adduser',
          name:'adduser',
          component:adduser
        }
      ]
    },
  ]
})

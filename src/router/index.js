import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path:"*",
    name:"NotFound",
    component: ()=>import(/*webpackChunkName: "NoTFound" */"../components/notfound/NotFound.vue")
  },
  {
    path: '/',
    name: 'Main',
    component: ()=>import(/*webpackChunkName: "Main" */"../components/main/Main")
   
  },
  {
    path: '/allinformation/:category_name/:id',
    name: 'AllInformation',
    component: ()=>import(/*webpackChunkName: "AllInformation" */"../components/main/AllInformation")
   
  },
  
  {
    path: '/oneinformation/:oneinformationid',
    name: 'OneInformation',
    component: ()=>import(/*webpackChunkName: "OneInformation" */"../components/main/OneInformation")
   

  },


  /*{
    path:'/add',
    name:"AddInformation",
    component:AddInformation
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior () {
      return { x: 0, y: 0 ,behavior: 'smooth',}
  }
})

export default router

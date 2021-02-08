import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      // name: 'index',
      component: ()=>import("../views/index.vue"),
      children:[
        {
          path:"",
          redirect:"/login"
        },
        {
          path:"/home",
          name:"home",
          component:()=>import("../views/Home.vue")
        },
        {
          path:"/order",
          name:"order",
          component:()=>import("../views/Order.vue")
        },
        {
          path:"/me",
          name:"me",
          component:()=>import("../views/Me.vue")
        },
        {
          path:"/address",
          name:"address",
          component:()=>import("../views/Address.vue")
        },
        {
          path:"/city",
          name:"city",
          component:()=>import("../views/City.vue")
        },
      ]
    },
    {
      path:"/details",
      name:"details",
      component:()=>import("../views/Details.vue")
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import("../views/index.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import("../views/login.vue")
    }
  ]
  
})


export default router

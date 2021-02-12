import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
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
      path:"/f-details",
      name:"f-details",
      component:()=>import("../views/Details.vue")
    },
    {
      path:"/order_start",
      name:"order_start",
      component:()=>import("../views/Order_start.vue")
    },
    {
      path:"/order_pay",
      name:"order_pay",
      component:()=>import("../views/Order_pay.vue")
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
    },
    {
      path: '/lock',
      name: 'lock',
      component: ()=>import("../views/Lock.vue")
    },
    {
      path: '/edit',
      name: 'edit',
      component: ()=>import("../views/Edit.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: ()=>import("../views/About.vue")
    },
    {
      path: '/version',
      name: 'version',
      component: ()=>import("../views/Version.vue")
    },
  ]
  
})


export default router

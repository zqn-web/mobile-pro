<template>
  <div class="index">
    <!-- 主页啦啦啦 -->
    <!-- <img :src="publicPath + `image/home-active.png`">
    <span>{{ publicPath }}</span> -->
    <router-view></router-view>
    <TabBar :data="tabbarData"/>
  </div>
</template>

<script>
import TabBar from '../components/TabBar.vue'
export default {
    name:"index",
    data(){
      return{
        tabbarData:[
          {
            title:"首页",
            icon:"image/home.png",
            iconActive:"image/home-active.png",
            path:"/home",
          },
          {
            title:"订单",
            icon:"image/order.png",
            iconActive:"image/order-active.png",
            path:"/order",
          },
          {
            title:"我的",
            icon:"image/me.png",
            iconActive:"image/me-active.png",
            path:"/me",
          },
        ]
      }
    },
    components:{
      TabBar
    }
}
</script>
<style>
.index{
  width: 100%;
  height: calc(100%-45px);
}
</style>

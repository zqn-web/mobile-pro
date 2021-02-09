<template>
  <div class="f-details">
    <Header :isLeft="true" />
    <!-- 轮播 -->
    <mt-swipe :auto="4000" class="f-swiper" :show-indicators="false">
      <mt-swipe-item >
      <img src="image/d-1.jpg" alt="">
      </mt-swipe-item>  
      <mt-swipe-item >
      <img src="image/d-1.jpg" alt="">
      </mt-swipe-item>  
      <mt-swipe-item >
      <img src="image/d-1.jpg" alt="">
      </mt-swipe-item>  
    </mt-swipe>
    <!-- 详情内容 -->
    <div class="content">
      <div class="title">简花·单品鲜花月套餐</div>
      <div class="tag">每周一束，每月4次，品种随机</div>
      <div class="price">¥800</div>
      <div class="numTitle">订购数量</div>
      <!-- 订购数量内容 -->
      <div class="numContent">
        <li v-for="(item,index) in lis " :key="index" :class="{on:currentIndex===index}" @click="liClick(index)">{{item}}</li>
      </div>
      <!-- IsView -->
      <div class="isview">
        <img src="image/view1.jpg" alt="">
        <img src="image/view2.jpg" alt="">
      </div>
    </div>
    <div class="button" @click="$router.push('/order')">立即购买</div>
  </div>
</template>

<script>
import Header from '../components/Header'
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    name:"f-details",
    data(){
      return {
        lis:["1 件套","2 件套","3 件套","4 件套"],
        currentIndex:0 
      }
    }
    ,
    methods:{
      liClick(index){
         this.currentIndex = index
      }
    },
    components:{
      Header
    }
}
</script>
<style  scoped>
.f-details{
  margin-top: 45px;
}
.button{
  align-items: center;
  text-align: center;
  background-color: #1AACD7;
  box-sizing: border-box;
  color: #fff;
  font-size: 16px;
  line-height: 45px;
  padding: 0 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
  border: solid transparent;
  border-radius: 5px;
}
/* 轮播 */
.f-swiper{
  height:350px;
}
.f-swiper img{
  width: 100%;
  height: 100%;
}
/* 详情 */
.content{
  display: inline-block;
  vertical-align: top;
  width: 100%;
  background: #fff;
}
.content *{
  margin: 0 15px;
}
.content .title{
  margin: 10px 15px 0 15px;
  font-size: 22px;
  font-family:'微软雅黑';
}
.content .tag{
  padding: 10px 0;
  font-size: 13px;
  color: #708C9A;
}
.content .price {
  font-size:20px;
  font-family: Arial;
  color: #FB218F;
}
.numTitle{
  margin: 10px 15px;
}
.content .numContent .on {
    color: #fff!important;
    background: #1AACD7!important;
}
.numContent li{
  list-style: none;
  outline: none;
  float: left;
  width: 46%;
  height: 2rem;
  line-height: 2rem;
  color: #D7D9D8;
  border: solid 1px #D7D9D8;
  border-radius: 5px;
  margin: 0.3rem !important;
  text-align: center;
  font-size: 14px;
}
.isview img{
  width: 100%;
  margin: 0;
}
</style>

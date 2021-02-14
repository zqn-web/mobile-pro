<template>
  <div class="home">
    <div class="header">
      <div class="address_map" @click="$router.push('/address')">
        <img src="image/ad.png" alt="">
        <span>{{address}}</span>
        <img src="image/san.png" alt="">
      </div>
    </div>
    <div class="search_wrap">
      <div class="shop_search">
        <img src="image/search.png" alt="">
        <input type="text" placeholder="搜索商家 商家名称">
        <!-- 搜索商家 商家名称 -->
      </div>
    </div>
    <div id="container" >
      <!-- 轮播 -->
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item >
          <img src="image/swipe1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item >
          <img src="image/swipe2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item >
          <img src="image/swipe3.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item >
          <img src="image/swipe4.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 推荐商家 -->
    <div class="shoplist-title">推荐商家</div>
    <!-- 商家 --> 
    <div class="contentList" @click="$router.push('/f-details')" v-for="i in 8">
      <img src="image/flower.jpg" alt="">
      <div class="tag">
        <div class="title">
          <b>简花·单品鲜花月套餐</b>
          <i>¥800</i>
        </div>
        <div class="tips">一周一花，每月4次，精选一周当季花材，品种随机</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'mint-ui';
export default {
   name:"home",
  //  data(){
  //    swipImages:[img]
  //  },
   computed:{
     address(){
       return this.$store.getters.address;
     }
  }
}
</script>
<style scoped>
.shop_search input{
  outline: none;
  border: none;
  margin-left: 0.5rem;
}
.home {
  width: 100%;
  height: 100%;
  padding-bottom: 45px;
  box-sizing: border-box;
}
.header,.search_wrap {
  background-color: #009eef;
  padding:10px  16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map img {
  height: 15px;
  width: 15px;
  margin: 0 3px 3px 0;
}
.shop_search img {
  margin-left: 3rem ;
  height: 15px;
  width: 15px;
  vertical-align: middle;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  /* 不换行 */
  white-space: nowrap;
  /* 省略号形式显示超出部分 */
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}
.search_wrap {
  text-align: center;
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
/* 轮播 */
.swiper{
  margin: 5px 0;
  border-radius: 6px;
  height: 120px;
}
.swiper img{
  width: 100%;
  height: 100%;
}
/* 推荐商家 */
.shoplist-title {
  /* 居中对齐弹性盒的各项 <div> 元素 */
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: #333;
  background: #fff;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}
/* countList */
.contentList{ 
  margin: 10px;
  position: relative;
}
.contentList img{
  width: 100%; 
  height: 100%; 
}
.contentList .tag{ 
  box-sizing: border-box;
  position: absolute; 
  bottom: 0; 
  width: 100%; 
  padding: 0.25rem 1.4rem; 
  background: rgba(255,255,255,0.6)
}
.contentList .tag .title{ 
  line-height: 1rem; 
  height: 1rem;  
}
.contentList .tag .title *{ 
  float: left; 
  height: 100%;
  font-size: 18px;   
  font-family: monospace;
}
.contentList .tag .title b{ 
  width:calc(100% - 2rem); 
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap; 
}
.contentList .tag .title i{ 
  width: 2rem; 
  text-align: right;
}
.contentList .tag .tips{ 
  color: #9EB2B3; 
  margin-top: 7px;
  font-size: 13px; 
  width: 100%; 
  height:1.5rem; 
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;   
}
</style>

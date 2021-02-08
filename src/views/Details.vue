<template>
  <div class="details">
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
      <!-- 内容 -->
      
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    name:"details"
}
</script>
<style  scoped>
.f-swiper{
  height:350px;
}
.f-swiper img{
  width: 100%;
  height: 100%;
}
</style>

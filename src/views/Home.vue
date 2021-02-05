<template>
  <div class="home">
    <div class="header">
      <div class="address_map" @click="$router.push('/address')">
        <img src="image/ad.png" alt="">
        <span>{{address}}</span>
        <img src="image/san.png" alt="">
      </div>
      <div class="shop_search">
        <img src="image/search.png" alt="">
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name:"home",
   computed:{
     address(){
       return this.$store.getters.address;
     }
   }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header {
  background-color: #009eef;
  padding: 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map img {
  height: 15px;
  width: 15px;
}
.shop_search img {
  height: 15px;
  width: 15px;
  vertical-align: middle;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  /* 省略号形式显示超出部分 */
  text-overflow: ellipsis;
}
.header .shop_search {
  margin-top: 10px;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}
</style>

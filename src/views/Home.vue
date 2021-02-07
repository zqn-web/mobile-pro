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
        搜索商家 商家名称
      </div>
    </div>
    <div id="container" style="height:2000px"></div>
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
  /* overflow: auto; */
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
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}
.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
</style>

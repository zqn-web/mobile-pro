<template>
  <div class="home">
    <div class="header">
      <div class="address_map">
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
<style>
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
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map img {
  height: 15px;
  width: 15px;
}
.shop_search img {
  height: 15px;
  width: 15px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
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

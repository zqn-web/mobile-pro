<template>
  <div class="city">
      <div class="search_wrap">
          <div class="search">
              <img src="image/search.png" alt="">
              <input v-model="city_val" type="text" placeholder="输入城市名">
          </div>
          <button @click="$router.go(-1)">取消</button>
      </div>
  </div>
</template>

<script>
export default {
    name:"City",
    data(){
        return{
            city_val:""
        }
    }
}
</script>
<style  scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search img{
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  border: none;
  background: #fff;
  outline: none;
  color: #009eef;
  
}
.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>

<template>
  <div>
      <div class="des">
          <div class="title">
            <img src="image/fly.png" alt="">
              当前定位
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"location",
    props:{
      address:String
    }
}
</script>
<style  scoped>
.title {
  margin: 10px 0;
  font-size: 12px;
}
.des img {
  width: 13px;
  height: 13px;
  vertical-align: middle;
}
</style>

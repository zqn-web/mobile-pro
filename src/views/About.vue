<template>
  <div class="about">
    <Header :isLeft="true" title="关于我们"/>
    <div class="A-top">
        <img src="../assets/logo.png" alt="">
    </div>
    <div class="content">
      <div class="des" >
        <span>官方网站</span>
        <span style="float:right">www.miss.com</span>
      </div>  
      <div class="des" >
        <span>推荐分享</span>
        <img style="float:right" src="image/right.png" alt="">
      </div>  
      <div class="des" >
        <span>商务合作</span>
        <img style="float:right" src="image/right.png" alt="">
      </div>  
      <div class="des" >
        <span>信息披露</span>
        <img style="float:right" src="image/right.png" alt="">
      </div>  
      <div class="des" >
        <span>在线客服</span>
        <img style="float:right" src="image/right.png" alt="">
      </div>  
      <div class="des" >
        <span>版本更新</span>
        <img style="float:right" src="image/right.png" alt="">
      </div>  
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name:"about",
    components:{
      Header
  }
}
</script>
<style  scoped>
.about{
    margin-top: 45px;
}
.A-top{
    padding: 2rem;
}
.about img{
    width: 100%;
    height: 100%;
}
.content{
  margin-top: 0.7rem;
  background: #fff;
}
.des{
    padding: 0.7rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.des img{
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>

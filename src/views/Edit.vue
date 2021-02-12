<template>
  <div class="edit">
    <Header :isLeft="true" title="编辑资料"/>
    <div class="content"> 
      <div class="des" >
        <span>昵称</span>
        <div style="float:right">
          <span>啦啦啦</span>
          <img  src="image/right.png" alt="">
        </div>
      </div>  
      <div class="des" >
        <span>签名</span>
        <div style="float:right">
          <span>书写我们生活的篇章</span>
          <img  src="image/right.png" alt="">
        </div>
      </div>   
      <div class="des" >
        <span>地区</span>
        <div style="float:right">
          <span>陕西省西安市</span>
          <img  src="image/right.png" alt="">
        </div>
      </div>  
      <div class="des" >
        <span>性别</span>
        <div style="float:right">
          <span>女</span>
          <img  src="image/right.png" alt="">
        </div>
      </div> 
      <div class="des" >
        <span>联系方式</span>
        <div style="float:right">
          <span>18799999999</span>
          <img  src="image/right.png" alt="">
        </div>
      </div>  
      <div class="des" >
        <span>工作单位</span>
        <div style="float:right">
          <span>啦啦啦大学</span>
          <img  src="image/right.png" alt="">
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name:"edit",
    components:{
      Header
  }
}
</script>
<style  scoped>
.content{
  margin-top:45px;
  box-sizing: border-box;
  background: #fff;
}
.des{
    padding: 0.7rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.des img{
  margin-left: 4px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>

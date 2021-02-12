<template>
  <div class="version">
    <Header :isLeft="true" title="版本信息"/>
    <div class="top">
        <img src="../assets/logo.png" alt="">
    </div>
    <div class="bottom">
        <p style="color:#009eef;font-size:20px;font-wight:bold">新界面  新体验</p>
        <p>密丝生活花店2.0版本全新上线</p>
        <button>立即体验</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name:"version",
    components:{
      Header
  }
}
</script>
<style  scoped>
.top{
    margin-top: 45px;
}
.top img{
    width: 100%;
    height: 100%;
}
.bottom{
    margin-top: 2rem;
   text-align: center;
}
.bottom p{
    margin: 1rem;
}
.bottom button{
    background: transparent;
    outline: none;
    width: 80%;
    height: 40px;
    color:  #1AACD7;
    border: 1px solid  #1AACD7;
    border-radius: 4px;
    margin-top: 0.3rem;
}
</style>

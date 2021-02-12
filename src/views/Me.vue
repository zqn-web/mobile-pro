<template>
  <div class="me">
    <div class="me-top">
      <div class="set">
        <img src="image/left.png"  @click="$router.go(-1)">
        <p style="text-align:center">个人中心</p>
        <img src="image/set.png" @click="$router.push('/edit')">
      </div>
      <div class="self">
        <!-- 头像 -->
        <img src="image/avatar.jpg" alt="">
        <!-- 名称 -->
        <div>
          <p>昵称：啦啦啦</p>
          <p>手机号：18799999999</p>
          <p>所在单位：啦啦啦大学</p>
        </div>
      </div>
    </div>
    <!-- list 内容 -->
    <div class="content">
      <div class="list">
        <div class="des" @click="$router.push('/lock')">
          <img src="image/lock.png" alt="">
          <span>修改密码</span>
          <img style="float:right" src="image/right.png" alt="">
        </div>
        <div class="des"  @click="$router.push('/edit')">
          <img src="image/ed.png" alt="">
          <span>修改资料</span>
          <img style="float:right" src="image/right.png" alt="">
        </div>
        <div class="des"  @click="$router.push('/about')">
          <img src="image/tishi.png" alt="">
          <span>关于我们</span>
          <img style="float:right" src="image/right.png" alt="">
        </div>
        <div class="des"  @click="$router.push('/version')">
          <img src="image/version.png" alt="">
          <span>版本信息</span>
          <img style="float:right" src="image/right.png" alt="">
        </div>
        <div class="des" >
          <img src="image/share.png" alt="">
          <span>分享应用</span>
          <img style="float:right" src="image/right.png" alt="">
        </div>
        <div class="des" >
          <img src="image/kefu.png" alt="">
          <span>我的客服</span>
          <img style="float:right" src="image/right.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"me"
}
</script>
<style  scoped>
.set{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  
}
.set img{
  width: 20px;
  height: 20px;
}
.me-top{
  padding: 0.3rem;
  background:#5c7cf3;
  color: aliceblue;
}
.self{
  margin:0 1.5rem 0 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.self img{
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  vertical-align: middle;
}
.content{
  margin-top: 0.7rem;
  background: #fff;
}
.des img{
  margin: 16px;
  height: 16px;
  vertical-align: middle;
}
.des{
  border-bottom: 1px solid #ccc;
}
.des span{
  margin-left: -9px;
}
</style>

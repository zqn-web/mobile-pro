<template>
  <div class="me">
    <div class="me-top">
      <p style="text-align:center">个人中心</p>
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
    <div></div>
  </div>
</template>

<script>
export default {
    name:"me"
}
</script>
<style  scoped>
.me-top{
  padding: 0.3rem;
  background:#5c7cf3;
  color: aliceblue;
}
.self{
  margin:0 1.5rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.self img{
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  vertical-align: middle;
}
</style>

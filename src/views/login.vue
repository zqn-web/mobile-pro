<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.png" alt="my login image">
    </div>
    <!-- 手机号 -->
    <inputGroup
     type="number"
     v-model="phone"
     placeholder="手机号"
     :btnTitle="btnTitle"
     :disabled="disabled"
     :error="errors.phone"/>
    <!--验证码  -->
    <inputGroup
     type="number"
     v-model="verifyCode"
     placeholder="验证码"
     :error="errors.code"/>
     <!-- 用户服务协议 -->
     <div class="login_des">
       <p>新用户登录即自动注册，表示已同意
         <span>《用户服务协议》</span>
       </p>
     </div>
     <!-- 登录按钮 -->
     <div class="login_btn">
       <button>登录</button>
     </div>
  </div>
</template>

<script>
import inputGroup from '../components/inputGroup.vue'

export default {
    name:"login",
    data(){
      return {
        phone:"",//手机号码输入框
        verifyCode:"",//验证码输入框
        errors:{},
        btnTitle:"获取验证码",
        disabled:false
      }

    },
    components:{
      inputGroup
    }
}
</script>
<style>
.login{
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: #fff;
}
.logo{
  text-align: center;
}
.logo img{
  width: 250px;
}
</style>

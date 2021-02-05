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
     :error="errors.phone"
     @btn-click="getVerifyCode"
     />
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
       <button :disabled="isClick" @click="handleLogin">登录</button>
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
    computed:{
     isClick(){
       if(!this.phone || !this.verifyCode){
         return true
       }else { return false}
     }
    },
    methods:{
      handleLogin(){
        // 取消错误提醒
        this.errors={};
        // 点击跳转 
        this.$router.push('/index')
      },
      getVerifyCode(){
        if(this.validatePhone()){
          //发送网络请求
          // this.$axios.post('/api/posts/sms_send',{
          //   sid:"70e9281073fe5e1546b7f657cae73897",
          //   token:"d1a5431e19d2005c3286794786111d79",
          //   appid:"099a1aedcf1 9400a9eb83d857eb7b845",
          //   templateid:"522016",
          //   phone:this.phone

          // }).then(res=>{
          //   console.log(res)
            this.validateBtn();
          // })
        }
      },
      validateBtn(){
        let time=59;
        let timer=setInterval(()=>{
          // 判断当前time==0
          if(time==0){
            clearInterval(timer);
            this.btnTitle="获取验证码";
            this.disabled=false;
          }else{
            // 倒计时
            this.btnTitle=time +"秒后重试";
            this.disabled=true;
            time--;
          }
        },1000)
      },
      validatePhone(){
        // 验证手机号码
        // 判断手机号码不能为空
        if(!this.phone){
          this.errors={
            phone:"手机号码不能为空"
          };
          return false;
        }else if(!/^1[345678]\d{9}$/.test(this.phone)){
          this.errors={
            phone:"请填写正确的手机号码"
          }
          return false ;
        }else{
          this.errors={};
          return true
        }
      }
    },
    components:{
      inputGroup
    }
}
</script>
<style scoped>
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
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>

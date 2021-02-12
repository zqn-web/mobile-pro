<template>
  <div class="lock">
    <Header :isLeft="true" title="忘记密码"/>
    <div class="title">
        <h2 style="color:#000;font-size:25px">重置密码</h2>
        <p>验证码发送到您的电子邮箱，请输入验证码并创建新密码</p>
    </div>
   <div class="input">
        <input type="text" placeholder="验证码">
        <input type="password" placeholder="新的密码">
        <input type="password" placeholder="确认密码">
   <!-- 提交按钮 -->
   <Button @click="modal1 = true">更改密码</Button>
    <Modal
        v-model="modal1"
        title="更改密码"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>修改成功！！！</p>
    </Modal>
   </div>
   
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name:"lock",
    data () {
            return {
                modal1: false
            }
    },
    methods: {
        ok () {
            this.$Message.info('Clicked ok');
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        }
    },
    components:{
      Header
  }
}
</script>
<style  scoped>
.title{
    margin:45px 1rem 0 1rem;
    padding: 2rem 1rem 0 1rem;
}
.input{
    margin:1rem  2rem;
}
.input input{
    width: 100%;
    height: 100%;
    margin: .5rem 0;
    outline: none;
    border: 1px solid #ccc; 
    border-radius: 4px;
    padding: 13px;
}
.input button{
    background: transparent;
    outline: none;
    width: 100%;
    height: 40px;
    color:  #1AACD7;
    border: 1px solid  #1AACD7;
    border-radius: 4px;
    margin-top: 0.3rem;
}
</style>

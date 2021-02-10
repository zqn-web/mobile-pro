<template>
  <div class="pay">
      <!-- 待付款 -->
      <div class="pay-wait">
          <div class="title">
              <span>待付款</span>
              <span>下单时间：2021-02-11 17:33:45</span>
          </div>
          <div class="content">
              <p>李江 18799999999</p>
              <p>陕西省西安市未央区学府中路106号</p>
          </div>
      </div>
      <!-- 订单信息 -->
      <div class="pay-order">
          <p>订单信息</p>
          <!-- 内容 -->
          <span>订单号</span>
          <span>SF12345678999999909999</span>
      </div>
      <!-- 订单费用 -->
      <div>

      </div>
      <Affix :offset-bottom="20"> 
        <!-- 去支付 -->
        <div class="sele">
            <span class="cancel" @click="$router.go(-1)">取消订单</span>
            <span style="border:1px solid  rgb(26, 173, 25)" >去付款</span>
        </div>
      </Affix>
  </div>
</template>

<script>
export default {
    name:"pay"
}
</script>
<style  scoped>
.sele{
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 45px;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 1.5rem 0px;
}
.sele span{
    text-align: center;
    width: 35%;
    padding: 8px 13px;
    border-radius: 5px;
    margin: 0.8rem;
}
.cancel{
    background: #eee;
    color: #999;
}
</style>

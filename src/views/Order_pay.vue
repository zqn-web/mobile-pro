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
          <p style="border-bottom: 1px solid #ccc;">订单信息</p>
          <!-- 内容 -->
          <Row type="flex" class="order_content order-public" align="middle" justify="space-between" v-for="i in 1" style="padding:1rem 0">
                <Col span="auto">
                    <img src="image/flower.jpg" width="64px" alt="">
                </Col>
                <Col :span="18">
                    <Row justify="space-between">
                        <Col>
                            <Row>
                                <Col>
                                    <p>山茶花 {{i}}</p>
                                </Col>
                            </Row>
                            <Row style="margin-top: 10px;">
                                <Col>
                                    <p style="font-size:10px; color:#aaa;">
                                        订购数量：{{i}}件套
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row justify="end">
                                <Col>
                                    <p>金额：￥{{i*800}}</p>
                                </Col>
                            </Row>
                            <Row style="margin-top: 10px;">
                                <Col>
                                    <p>运费：￥0.00</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
          <span>订单号:</span>
          <span style="float:right">SF12345678999999909999</span>
      </div>
      <!-- 订单费用 -->
      <div class="cost">
        <div>订单费用</div>
        <div>商品总额：
            <span>￥1600</span>
        </div>
        <div>运费：
            <span>￥0.00</span>
        </div>
        <div>付款金额：
            <span>￥1600</span>
        </div>
      </div>
      <Affix :offset-bottom="20"> 
        <!-- 去支付 -->
        <div class="sele">
            <span class="cancel" @click="$router.go(-1)">取消订单</span>
            <span style="border:1px solid  rgb(26, 173, 25);color:rgb(26, 173, 25)" >去付款</span>
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
.pay>div{
    background:#fff;
}
.title{
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}
.pay .cost>div{
    padding: 0.5rem
}
.cost{
    margin-top: 0.5rem;
}
.cost span{
    float: right;
    padding-right: 0.3rem;
}
.content{
    padding: 0.5rem;
}
.pay-order{
    padding: 0.5rem;
    margin-top: 0.5rem;
    box-sizing: border-box;
}

</style>

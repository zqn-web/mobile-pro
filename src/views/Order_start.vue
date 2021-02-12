<template>
  <div class="order_start">
      <Header :isLeft="true" />
      <!-- 订单内容 -->
      <Row type="flex" class="order_content order-public" align="middle" justify="space-between" v-for="i in 8" style="margin-bottom: 6px;">
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
      <Affix :offset-bottom="0">
        <div class="pay">
          <!-- 支付方式 -->
          <div class="order-public">
            <span class="money">付款金额：￥1600</span>
            <span class="weixin" @click="$router.push('/order_pay')">微信支付</span>
          </div>
        </div>
      </Affix>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
    name:"order_start",
    components:{
        Header
    }
}
</script>
<style scoped>
.pay{
  width: 100%;
  border-top: 1px solid rgb(184, 179, 179);
}
.order_start{
  margin-top: 45px;
  padding-bottom: 45px;
}
.order-public{
  background: #fff;
  padding: 15px 20px;
}
.weixin{ 
  font-size:1rem;
  color:#fff ;
  float: right;
  background: rgb(26, 173, 25);
  border-radius: 5px;
  padding: 6px 10px;
  margin-top: -4px;
}
.money{ 
  font-size: 1rem;
  color:#FC2290; 
}

</style>

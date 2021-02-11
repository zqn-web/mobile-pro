<template>
    <!-- <Affix :offset-top="0"> -->
  <div class="order">
    <Tabs value="name1">
        <TabPane label="已完成" name="name1">
          <div class="finished" v-for="i in 8">
            <div class="f-span">
              <span>WS798888888888880999</span>
              <span style="float:right;color:rgb(26, 173, 25)">已完成</span>
            </div>
             <Row type="flex" class="order_content order-public" align="middle" justify="space-between" v-for="i in 1" style="padding:1rem;border-bottom: 1px solid #ccc;">
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
            <div class="f-span">
              <span style="color:#fc345f">￥1600.00</span>
              <span style="float:right;">2021-2-11</span>
            </div>
          </div>
        </TabPane>
        <TabPane label="待付款" name="name2">
          <div class="finished" v-for="i in 8">
            <div class="f-span">
              <span>WS798888888888880999</span>
              <span class="to-pay" @click="$router.push('/order_pay')">去付款</span>
            </div>
             <Row type="flex" class="order_content order-public" align="middle" justify="space-between" v-for="i in 1" style="padding:1rem;border-bottom: 1px solid #ccc;">
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
            <div class="f-span">
              <span style="color:#fc345f">￥1600.00</span>
              <span style="float:right;">2021-2-11</span>
            </div>
          </div>
        </TabPane>
        <TabPane label="待发货" name="name3">
            <div class="finished" v-for="i in 8">
            <div class="f-span">
              <span>WS798888888888880999</span>
              <span style="float:right;">待发货</span>
            </div>
             <Row type="flex" class="order_content order-public" align="middle" justify="space-between" v-for="i in 1" style="padding:1rem;border-bottom: 1px solid #ccc;">
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
            <div class="f-span">
              <span style="color:#fc345f">￥1600.00</span>
              <span style="float:right;">2021-2-11</span>
            </div>
          </div>
        </TabPane>
        <TabPane label="待收货" name="name4">
             <div class="finished" v-for="i in 8">
            <div class="f-span">
                <span>WS798888888888880999</span>
                <Button type="primary" style="float:right" @click="modal1 = true">查物流</Button>
                <Modal
                    v-model="modal1"
                    title="顺丰快递"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <p>WS798888888888880999</p>
                </Modal>
            </div>
             <Row type="flex" class="order_content order-public" align="middle" justify="space-between" v-for="i in 1" style="padding:1rem;border-bottom: 1px solid #ccc;">
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
            <div class="f-span">
              <span style="color:#fc345f">￥1600.00</span>
              <span style="float:right;">2021-2-11</span>
            </div>
          </div>
        </TabPane>
    </Tabs>
  </div>
    <!-- </Affix> -->
</template>

<script>
export default {
    name:"order",
    data(){
      return {
        selected:'1',
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
    }
}
</script>
<style  scoped>
.finished{
  margin-bottom: 1rem;
  background: #fff;
}
.order{
   padding-bottom: 45px;
  
}
.f-span{
  padding: 0.8rem ;
  border-bottom: 1px solid #ccc;
}
.to-pay{
  float:right;
  color:#fff;
  background: #fc345f;
  padding: 0.3rem;
  border-radius: 5px;
}
.seek{
  float:right;
  color:#fff;
  background: rgb(26, 173, 25);
  padding: 0.3rem;
  border-radius: 5px;
}
</style>

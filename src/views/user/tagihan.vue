<template>
  <div>
    <div class="header">
      <span>tagihan</span>
    </div>

    <div class="box">
      <div class="top">
        <div class="top_1">
          <span>Total amount(Rp)</span>
          <van-button @click="toTopUp" class="top_1_btn" round type="info">Top-up</van-button>
        </div>

        <div class="top_2">
          <span>169.200</span>
        </div>
      </div>

      <div class="center">
        <div class="center_item">
          <van-icon class="icon" size="26px" name="orders-o" />
          <div class="center_item_text" @click="toUserPay(0)">Bill record</div>
        </div>

        <div class="center_item">
          <van-icon class="icon" size="26px" name="balance-pay" />
          <div class="center_item_text" @click="toUserPay(1)">Catatan konsumsi</div>
        </div>

        <div class="center_item">
          <van-icon class="icon" size="26px" name="cash-back-record" />
          <div class="center_item_text" @click="toUserPay(2)">Catatan TOP_UP</div>
        </div>

        <div @click="toIntegral" class="center_item">
          <van-icon class="icon" size="26px" name="diamond-o" />
          <div class="center_item_text">Pusat Poin</div>
        </div>
      </div>


      <div class="gift">
        <div class="gift_1">
          <span>Sign in untuk mengumpulkan poin</span>
          <span>Upgrade levels to unlock more play!</span>
        </div>

        <img src="@/assets/img/mine/gift.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

    toIntegral(){
      this.$router.push({
        name: 'integral'
      })
    },

    toTopUp() {
      this.$router.replace({
        name: 'topUp'
      })
    },
    toUserPay(e){
      this.$router.replace({
        name: 'userPayList',
        query:e
      })
    }
  }
}
</script>

<style scoped>
.header {
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background-color: #fff;
  padding: 15px;
}

.top {
  width: 100%;
  height: 180px;

  background-image: linear-gradient(90deg, #f33b2b 0, #f36053);

  border-radius: 10px;
  margin: 0.3rem auto;
  color: hsla(0, 0%, 100%, .6);
  padding: 20px;

}

.top_1 {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.top_1_btn {
  font-size: 14px;

  height: 30px;

  background-color: #fff9f8;
  text-align: center;
  line-height: 30px;
  border: none;

  color: #f73e46 !important;
}

.top_2 {
  font-size: 28px;
  color: white;
}

.center {
  display: flex;
  justify-content: space-between;
}

.center_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

}

.icon {
  color: red;
}

.center_item_text {
  text-align: center;
  color: #999;
  margin-top: 5px;

}

.gift {
  background-color: #fff6d1;

  height: 60px;
  border-radius: 10px;
  padding: 0 15px;
  color: #e44609;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.gift img {
  width: 48px;
  height: 48px;
}

.gift_1 {
  display: flex;
  flex-direction: column;
}

.gift_1 span:first-child {
  font-weight: bold;
  font-size: 14px;

}

.gift_1 span:last-child {

  font-size: 12px;

}</style>
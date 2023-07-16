<template>
  <div>
    <van-popup v-model="show">
      <div class="dialogBox">
        <div class="dialogBox_1">
          <div class="dialogItem">
            <span>Phone</span>
            <span class="dialogItem_right">{{ userInfo.phoneNum }}</span>
          </div>
          <div class="dialogItem">
            <span>Secret</span>
            <span style="font-size: 12px;" class="dialogItem_right">{{ dialogObj.secret }}</span>
          </div>
          <div class="dialogItem_1">
            <img :src="dialogObj.imageUrl" alt="">
            <div class="dialogItem_1_right">Scan the code or entersecret to get the codeverification binding</div>
          </div>

          <div class="dialogItem">
            <span>Code</span>
            <input v-model="ggCode" placeholder="google verify code" class="dialogItem_right">
          </div>

          <div>
            <van-button @click="bindCode" class="dialogBtn" type="default">Verify Bind</van-button>
          </div>
        </div>
      </div>
    </van-popup>

    <div class="header">Nomor Akun</div>
    <div class="mine">
      <div class="user">
        <div class="user-icon">
          <div class="atter">
            <img src="@/assets/img/mine/user.png" alt="">
          </div>
          <div class="tips">
            <div class="tips_1">
              <span v-if="userInfo.nickName">{{ userInfo.nickName }}</span>
              <span v-if="!userInfo.nickName">{{ userInfo.phoneNum }}</span>
              <div class="tips_2">
                <img src="@/assets/img/mine/xing.png" alt="">
                <span>VIP{{ userInfo.vipLevel }}</span>
              
              </div>
              <van-icon size="24px" class="" name="shield-o"  @click="openDialog" />

            </div>
            <div class="tips_3">
              <span>ID:{{ userInfo.userId }}</span>
              <van-icon @click="eidtUser" size="18px" name="edit" />
              
            </div>
          </div>
        </div>
        <div class="wenzi">
          <div>
            <div class="price">{{ userInfo.balance | moneyFormat }}</div>
            <div class="price-tips">Saldo tersedia(Rp)</div>
          </div>
          <div>
            <div class="price">{{ userInfo.poinSaya }}</div>
            <div class="price-tips">Poin saya</div>
          </div>
        </div>
      </div>
      <!-- <div class="button">
        <div class="button-s">Area aktivitas</div>
      </div> -->
      <div class="tag">
        <div style="background:#01c3f7" @click="toTopUp">
          <span>icon</span>
          <span>TOP-UP</span>
        </div>
        <div style="background:#ebae2c">
          <span>icon</span>
          <span>Penarikan</span>
        </div>
      </div>
      <div class="list clearfix">
        <div class="item fl" v-for="(item, index) in itemList" :key="index" @click="toUrl(item)">
          <img :src="item.icon" alt="">
          <div class="itemName">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  data() {
    return {
      ggCode: '',
      dialogObj: {},
      show: false,
      userInfo: {},
      itemList: [
        { name: 'Pengumuman', url: '/list', icon: require('../assets/img/banner/item1.png') },
        { name: 'VIP', url: '/form', icon: require('../assets/img/banner/item2.png') },
        { name: 'Bank saya', url: 'myPay', icon: require('../assets/img/banner/item3.png') },
        { name: 'Invite', url: '/', icon: require('../assets/img/banner/item1.png') },
        { name: 'Tagihan', url: 'tagihan', icon: require('../assets/img/banner/item2.png') },
        { name: 'catatan', url: 'recordList', icon: require('../assets/img/banner/item3.png') },
        { name: 'Hubungi kami', url: 'msgList', icon: require('../assets/img/banner/item1.png') },
        { name: 'Tentang kami', url: '/', icon: require('../assets/img/banner/item2.png') },
      ]
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {

    bindCode() {
      this.$axios.post('/account/bindSecret?code=' + this.ggCode, { code: this.ggCode }).then(res => {
        this.$toast({
          msg: res.data.message,
          type: 'success'
        })
        this.show = false

      })
    },

    getCode() {
      this.$axios.post('/account/getGoogleSecret', {}).then(res => {
        this.dialogObj = res.data.data

      })
    },
    toUrl(e) {
      console.log(e.url)
      this.$router.push({
        name: e.url
      })
    },
    eidtUser() {
      this.$router.push({
        name: 'editUser'
      })
    },

    openDialog() {
      this.show = true
      this.getCode()
    },

    getUserInfo() {
      this.$axios.post('/account/getInfo', {}).then(res => {
        this.userInfo = res.data.data
        localStorage.setItem('balance', this.userInfo.balance)
        localStorage.setItem('poinSaya', this.userInfo.poinSaya)
      })
    },
    toTopUp() {
      this.$router.push({
        name: 'topUp'
      })
    }
  }
}
</script>

<style scoped lang="less">
.header {
  height: 40px;
  background: #01c3f7;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mine {
  margin: 0 10px;
}

.user {
  background: #fff;
  margin-top: 10px;
  border-radius: 5px;
}

.user-icon {
  display: flex;
  align-items: center;
  padding: 20px;
  line-height: 40px;
}

.atter img {
  width: 60px;
  height: 60px;
  // background: #000;
  border-radius: 50%;
  margin-right: 20px;
}

.tips {
  // line-height: 40px;
}

.tips_1 {
  display: flex;
  align-items: center;
}

.tips_2 img {
  width: 15px;
  height: 15px;
}

.tips_2 {
  padding: 4px 8px;
  height: 20px;
  background-color: rgba(0, 0, 0, .2);
  font-size: 12px;
  border-radius: 20px;
  margin-left: 10px;
  color: #444;
  display: flex;
  align-items: center;

}

.wenzi {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;
}

.wenzi div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.price {
  font-size: 18px;
}

.price-tips {
  font-size: 14px;
  color: #ccc;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.button-s {
  width: 80%;
  padding: 10px 40px;
  background: #01c3f7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
}

.tag {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
}

.tag div {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;
  border-radius: 10px;
  margin: 10px;
}

.list {
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 110px;

  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    width: 25%;
    text-align: center;
    margin-bottom: 15px;
    font-size: 14px;

    >img {
      width: 40px;
      margin-bottom: 6px;
    }
  }
}

.tips_3 {
  display: flex;
  align-items: center;
}

.dialogBox {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // width: 100%;
  // height: 100%;

}

.dialogBox_1 {
  padding: 20px 10px;
  height: 350px;
  width: 330px;

}

.van-popup--center {
  border-radius: 10px;
}

.dialogItem {
  height: 40px;
  display: flex;
  border-bottom: 1px solid #d5d2d2;
  font-size: 16px;
  align-items: center;

}

.dialogItem_right {
  margin-left: 20px;
}

.dialogItem_1 {
  display: flex;
  padding-top: 10px;
  font-size: 16px;
}

.dialogItem_1 img {
  height: 100px;
  width: 100px;
  // margin: 10px 0;
}

.dialogItem_1_right {
  margin-left: 10px;
}

.dialogBtn {
  background-color: #01c3f7;
  width: 100%;
  border-radius: 10px;
  margin-top: 30px;
  color: white;
  font-size: 18px;
}</style>

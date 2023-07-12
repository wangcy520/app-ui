<template>
  <div>
    <div class="header">Points exchange zone</div>
    <div class="mine">
      <div class="user">
        <div class="user-icon">
          <div class="atter"></div>
          <div class="tips">
            <div>{{userInfo.phoneNum}}</div>
            <div>ID:{{userInfo.userId}}</div>
          </div>
        </div>
        <div class="wenzi">
          <div>
            <div class="price">{{userInfo.balance}}</div>
            <div class="price-tips">Saldo tersedia(Rp)</div>
          </div>
          <div>
            <div class="price">{{userInfo.poinSaya}}</div>
            <div class="price-tips">Poin saya</div>
          </div>
        </div>
      </div>
      <div class="button">
        <div class="button-s">Area aktivitas</div>
      </div>
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
        <div class="item fl" v-for="(item, index) in itemList" :key="index" @click="toUrl(index)">
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
      userInfo:{},
      itemList: [
        { name: 'Pengumuman', url: '/list', icon: require('../assets/img/banner/item1.png') },
        { name: 'VIP', url: '/form', icon: require('../assets/img/banner/item2.png') },
        { name: 'Bank saya', url: '/', icon: require('../assets/img/banner/item3.png') },
        { name: 'Invite', url: '/', icon: require('../assets/img/banner/item1.png') },
        { name: 'Tagihan', url: '/', icon: require('../assets/img/banner/item2.png') },
        { name: 'catatan', url: '/', icon: require('../assets/img/banner/item3.png') },
        { name: 'Hubungi kami', url: '/', icon: require('../assets/img/banner/item1.png') },
        { name: 'Tentang kami', url: '/', icon: require('../assets/img/banner/item2.png') },
      ]
    }
  },
  created(){
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      this.$axios.post('/account/getInfo', {}).then(res => {
          this.userInfo = res.data.data
          
      })
    },
    toTopUp(){
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
}

.atter {
  width: 60px;
  height: 60px;
  background: #000;
  border-radius: 50%;
  margin-right: 20px;
}

.tips div {
  line-height: 40px;
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
</style>

<template>
  <div>
    <van-popup v-model="show">
      <div class="dialogBox">
        <div class="dialogBox_item_2">
        <div class="dialogBox_1">
          <span v-if="!dialogIottery" class="dialogBox_2" style="color: #fff;">Tebus sukses</span>
          <span v-if="dialogIottery" class="dialogBox_2" style="color: #fff;">Promosi sukses</span>
          <span v-if="!dialogIottery" class="dialogBox_3" style="color: hsla(0,0%,100%,.6);">Mendapat {{ dialogIotteryNumber }} points</span>
          <span v-if="dialogIottery" class="dialogBox_3" style="color: hsla(0,0%,100%,.6);">Bayar {{ dialogIotteryNumber1 }}, Menerima uang tunai {{
            dialogIotteryNumber }}</span>
          <van-button @click="closeShow" class="dialogBox_4" icon="" type="round">yakin</van-button>
        </div>
      </div>
      </div>
    </van-popup>
    <van-tabs v-model="active" animated color="#01c3f7" line-width="85px" @change="tasChange">
      <van-tab title="Dioperasikan" style="padding-bottom: 50px;">
        <!-- <scroller ref="scroller" class="my-scroller" :on-refresh="refresh" :on-infinite="infinite" noDataText="已无更多数据"> -->
        <div style="background:#fff;margin: 10px;padding: 10px;" v-for="(item, index) in list" :key="index">
          <div class="content-item">
            <div>{{ item.createdTime }}</div>
            <div class="box" v-if="item.payState == 0">Pesanan tidak dibayar</div>
            <div class="box" v-if="item.payState == 1 && !item.lotteryId">Is not on sales yet</div>
            <div class="box" v-if="item.status == 1">Promosi gagal</div>
            <div class="box" v-if="item.status == 2">Promosi sukses</div>
          </div>
          <div style="border-top: 1px solid #f5e9e9;border-bottom: 1px solid #f5e9e9;padding: 10px 0px;">
            <div style="display: flex;height: 100px;">
              <div style="width:25%;margin-right: 2%;">
                <img style="width:100%;height:100%" :src="item.imageUrl" alt="">
              </div>
              <div style="width:50%">Pemula 2x</div>
              <div style="width:20%;color: #ccc;">
                <div>Rp{{ item.price | moneyFormat }}</div>
                <div>X{{ item.productCount }}</div>
              </div>
            </div>
            <div style="text-align: right;">1 ltem,Jumlah total <span style="color:red">Rp{{ (item.price *
              item.productCount) | moneyFormat }}</span></div>
          </div>
          <div class="bottom">
            <span v-if="item.count > 0">Bonus hitungan mundur:{{ item.tiemCount }}</span>
            <span class="bottom" v-if="item.payState == 1 && item.lotteryId && item.status == 1">
              <p class="bottom-txt" style="border:1px solid rgb(213, 232, 146);color:rgb(213, 232, 146)">Picking up</p>
              <p @click="checkLottery(item)" class="bottom-txt"
                style="border:1px solid rgb(56, 143, 235);color:rgb(56, 143, 235)">Tebus poin</p>
            </span>
            <span class="bottom" v-if="item.payState == 1 && item.lotteryId && item.status == 2">
              <p class="bottom-txt" style="border:1px solid rgb(213, 232, 146);color:rgb(213, 232, 146)">Picking up</p>
              <p @click="checkLottery(item)" class="bottom-txt"
                style="border:1px solid rgb(56, 143, 235);color:rgb(56, 143, 235)">Refund</p>
            </span>
            <p @click="toPay(item)" v-if="item.payState == 0 && !item.lotteryId" class="bottom-txt"
              style="border:1px solid rgb(56, 143, 235);color:rgb(56, 143, 235)">to Pay</p>
            <p @click="toGame(item)" v-if="item.payState == 1 && !item.lotteryId" class="bottom-txt"
              style="border:1px solid rgb(255, 3, 16);color:rgb(255, 1, 35)">HOT SPOT</p>
            <p class="bottom-txt" @click="toPayDetails(item)">Melihat detail</p>
          </div>
        </div>
        <!-- </scroller> -->
      </van-tab>
      <van-tab title="Dikonversikan" @change="tasChange" style="padding-bottom: 50px;">
        <!-- <scroller ref="scroller" class="my-scroller" :on-refresh="refresh" :on-infinite="infinite" noDataText="已无更多数据"> -->
        <div style="background:#fff;margin: 10px;padding: 10px;" v-for="(item, index) in list" :key="index">
          <div class="content-item">
            <div>{{ item.createdTime }}</div>
            <div class="box">Promosi gagal</div>
          </div>
          <div style="border-top: 1px solid #f5e9e9;border-bottom: 1px solid #f5e9e9;padding: 10px 0px;">
            <div style="display: flex;height: 100px;">
              <div style="width:25%;margin-right: 2%;">
                <img style="width:100%;height:100%" :src="item.imageUrl" alt="">
              </div>
              <div style="width:50%">Pemula 2x</div>
              <div style="width:20%;color: #ccc;">
                <div>Rp{{ item.price | moneyFormat }}</div>
                <div>X{{ item.productCount }}</div>
              </div>
            </div>
            <div style="text-align: right;">1 ltem,Jumlah total <span style="color:red">Rp{{ (item.price *
              item.productCount) | moneyFormat }}</span></div>
          </div>
          <div class="bottom">
            <p class="bottom-txt" @click="toPayDetails(item)">Melihat detail</p>
          </div>
        </div>
        <!-- </scroller> -->
      </van-tab>
      <van-tab title="Refund" @change="tasChange" style="padding-bottom: 50px;">
        <div style="background:#fff;margin: 10px;padding: 10px;" v-for="(item, index) in list" :key="index">
          <div class="content-item">
            <div>{{ item.createdTime }}</div>
            <div class="box">Promosi sukses</div>
          </div>
          <div style="border-top: 1px solid #f5e9e9;border-bottom: 1px solid #f5e9e9;padding: 10px 0px;">
            <div style="display: flex;height: 100px;">
              <div style="width:25%;margin-right: 2%;">
                <img style="width:100%;height:100%" :src="item.imageUrl" alt="">
              </div>
              <div style="width:50%">Pemula 2x</div>
              <div style="width:20%;color: #ccc;">
                <div>Rp{{ item.price | moneyFormat }}</div>
                <div>X{{ item.productCount }}</div>
              </div>
            </div>
            <div style="text-align: right;">1 ltem,Jumlah total <span style="color:red">Rp{{ (item.price *
              item.productCount) | moneyFormat }}</span></div>
          </div>
          <div class="bottom">
            <p class="bottom-txt" @click="toPayDetails(item)">Melihat detail</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { Loading } from 'vant'
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  data() {
    return {
      dialogIottery: false,
      dialogIotteryNumber: '',
      dialogIotteryNumber1: '',
      show: false,
      active: 0,
      list: [],
      pageNum: 1,
      pageSize: 10,
      groupType: 0,
      flag: false,
      type: '',
      total: ''
    }
  },
  mounted() {
    // 这里用了个防抖函数 体验更优
    window.addEventListener('scroll', this.handleScroll, 200)
  },
  created() {
    this.getOrderList()
  },
  methods: {
    handleScroll() {
      if (this.$route.path != '/pesanan') {
        return
      }

      // 窗口滚要做的操作写这里
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight // 滚动条高度
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 滚动条距离顶部的距离
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight // 滚动条外容器的高度
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        // 快到底时----加载

        if (this.flag == false) {

          this.pageNum += 1
          this.getOrderList('more') // 加载数据的方法


        }


      }
    },

    closeShow() {
      this.show = false
    },
    checkLottery(item) {
      this.$axios.get('/player-order/operate?orderId=' + item.id, {}).then(res => {
        if (item.status == 1) {
          //没中奖
          this.dialogIottery = false

        } else if (item.status == 2) {
          //中奖
          this.dialogIottery = true
        }
        this.show = true
        this.dialogIotteryNumber = res.data.data.amount
        if (res.data.data.fee) {
          this.dialogIotteryNumber1 = res.data.data.fee
        }

        this.getOrderList()
      })
    },

    toPay(item) {
      let params = {
        productId: item.productId,
        count: item.productCount,
        ...item
      }
      this.$router.push({
        name: "submitOrder",
        query: params
      });
    },
    toGame(item) {
      this.$router.push({
        name: "games",
        query: item
      });
    },

    getOrderList(str) {
      let data = {
        groupType: this.type ? this.type : 0,
        pageParams: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          startTime: "",
          endTime: ""
        }

      }
      this.$axios.post('/player-order/list', data, str ? 'false' : '').then(res => {
        if (res.data.data.list.length == 0 && str == 'more') {
          this.flag = true
          return
        }

        if (str == 'more') {
          //分页加1
          this.list = this.list.concat(res.data.data.list)
        } else {
          this.list = res.data.data.list

        }




        if (this.active == 0) {
          this.list.forEach((item) => {
            if (item.payState == 1 && item.lotteryId && item.status == 0) {
              this.$axios.get('/player-order/getSeconds?orderId=' + item.id, {}).then(res1 => {
                // item.count = (0 - res1.data.data)
                item.count = res1.data.data

                item.Interval = setInterval(() => {
                  if (item.count == 0) {
                    clearInterval(item.Interval)
                    this.getOrderList()
                    return
                  }
                  item.count -= 1
                  let countStr = item.count % 60
                  let countStr1 = ((item.count - countStr).toFixed(2)) / 60
                  if (countStr < 10) {
                    countStr = '0' + countStr
                  }
                  if (countStr1 < 10) {
                    countStr1 = '0' + countStr1
                  }
                  item.tiemCount = countStr1 + ':' + countStr

                  this.list.splice()
                }, 1000);
              })
            }

          })
        }

      })
    },
    refresh() {
      this.list = []
      this.pageNum = 1
      this.getOrderList()
    },
    infinite(done) {
      if (this.list.length > 25) {
        this.$refs.scroller.finishInfinite(true)
        if (this.list.length < 10) {
          document.getElementsByClassName('loading-layer')[0].style.display = 'none'
        }
        document.getElementsByClassName('pull-to-refresh-layer')[0].style.display = 'none'
      } else {
        this.pageNum++
        this.getList(done)
      }
    },
    tasChange(e) {
      this.type = e
      this.list = []
      this.pageNum = 1
      this.getOrderList()
    },
    toPayDetails(e) {
      {
        e.isflag = true
        this.$router.push({
          name: "payDetails",
          query: e
        });
      }
    }
  }
}
</script>

<style scoped>
.box {
  color: #ee0a24;
}

.content-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.bottom {
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bottom-txt {
  padding: 5px 3px;
  border: 1px solid rgb(252, 206, 72);
  color: rgb(252, 206, 72);
  border-radius: 10px;
  font-size: 14px;
  margin: 0 2px;
}

.dialogBox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.dialogBox_1 {
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../assets/img/bg1.png);
  background-size: 100% 100%;
  width: 80%;
  height: 80%;
  z-index: 1;
}
.dialogBox_item_2{
  background-image: url(../assets/img/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.van-popup{
  background:none;
  width: 90%;
  height: 50%;
}
.dialogBox_2 {
  margin-top: 100px;
  color: white;
  font-size: 20px;
}

.dialogBox_3 {
  color: #a2a0a0;
  font-size: 18px;
  text-align: center;

}

.dialogBox_4 {
  /* height: 50px; */
  background-color: #f8d168;
  color: #EB4331;
  width: 160px;
  margin-top: 30px;
  padding:0 20px;
}
</style>

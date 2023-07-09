<template>
  <div>
    <van-tabs v-model="active" animated color="#01c3f7" line-width="85px">
      <van-tab title="Dioperasikan">内容 1</van-tab>
      <van-tab title="Terima">内容 2</van-tab>
      <van-tab title="Selesai">内容 3</van-tab>
      <van-tab title="Dikonversikan">
        <div style="background:#fff;margin: 10px;padding: 10px;">
          <div class="content-item">
            <div>2023-07-01 18:07:31</div>
            <div class="box">Promosi gagal</div>
          </div>
          <div style="border-top: 1px solid #f5e9e9;border-bottom: 1px solid #f5e9e9;padding: 10px 0px;">
            <div style="display: flex;height: 100px;">
              <div style="width:30%">icon</div>
              <div style="width:50%">Pemula 2x</div>
              <div style="width:20%;color: #ccc;">
                <div>Rp2.000</div>
                <div>X1</div>
              </div>
            </div>
            <div style="text-align: right;">1 ltem,Jumlah total <span style="color:red">Rp2.000</span></div>
          </div>
          <div class="bottom">
            <p class="bottom-txt">Melihat detail</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="Refund">内容 4</van-tab>
    </van-tabs>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  data() {
    return {
      active: 1,
      list:[]
    }
  },
  created(){
    this.getOrderList()
  },
  methods:{
    getOrderList(){
      let data = {
      "pageParams": {
        "pageNum": 1,
        "pageSize": 10,
        "startTime": "",
        "endTime": ""
      }
  
     }
     this.$axios.post('/player-order/list',data).then(res=>{
      this.list = res.data.data
     })
    
   
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
  justify-content: end;
  align-items: center;
}

.bottom-txt {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #ccc;
}</style>

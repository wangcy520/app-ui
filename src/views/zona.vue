<template>
  <div>
    <div class="header">VIP Goods List</div>
    <div class="search">
      <div @click="refresh('price',isOrder==true ? isOrder : false)">Harga</div>
      <div @click="refresh('sale',isOrder==false ? isOrder : true)">Volume penjualan</div>
    </div>
    <div class="list">
     <!-- <scroller ref="scroller" class="my-scroller" :on-refresh="refresh" :on-infinite="infinite" noDataText="已无更多数据"> --> 
      <div class="content">
        <div class="content-item" v-for="(item,index) in dataList" :key="index" @click="toGoodDetail(item)">
          <div class="content-box">
            <div class="img">
              <img :src="item.imageUrl[0]" alt="" style="width:100%;height:100%">
            </div>
            <div class="tp">
              <div class="txt">{{item.name}}</div>
              <div class="price">Rp{{item.price}}</div>
              <div class="tips">Sold {{item.sale}}</div>
            </div>
          </div>
        </div>

      </div>
     <!-- </scroller> --> 
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  data(){
    return{
      list:0,
      keyword:'',
      orderTypeprice:true,
      orderTypeSale:false,
      dataList:[],
      isOrder:false
    }
  },
  methods: {
    refresh(e,flag){
      this.isOrder = !flag
      this.getList(e,this.isOrder)
    },
    getList(e,flag){
      let data = {
          orderColumn:e,
          orderType:flag,
          isVip:true
      }
      this.$axios.post("/product-info/list", data).then(res => {
          this.dataList = res.data.data
      });
    },
    toGoodDetail(e) {
      e.imageUrlCopy = this.$json.encodeObj(e.imageUrl)
      this.$router.push({
        name: "goodDetail",
        query: e
      });
    },
  },
  mounted(){
    this.getList('price',true)
  }
}
</script>

<style scoped lang="less">
.header {
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search{
  height: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content:space-around;
}
.list {
  // height: calc(100% - 105px);
  // background-color: #fff;
  // position: relative;
  .content {
    display: flex;
    flex-wrap: wrap;

    .content-item {
      // flex: 1;
      width: 50%;

      .content-box {
        background-color: #fff;
        margin: 10px;
        border: 1px solid #ccc;

        .img {
          height: 120px;
          background: #000;
        }

        .tp {
          margin: 15px 10px;
          .tips{
            color: #ccc;
            font-size: 12px;
          }
          .price {
            color: red;
          }
        }
      }
    }
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
}</style>

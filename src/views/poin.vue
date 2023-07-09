<template>
  <div>
    <div class="header">Points exchange zone</div>
    <div class="search b-border">
      <input type="text" placeholder="Search for product information" v-model.trim="keyword">
    </div>
    <div class="list">
      <!-- <scroller ref="scroller" class="my-scroller" :on-refresh="refresh" :on-infinite="infinite" noDataText="已无更多数据"> -->
      <div class="content">
        <div class="content-item">
          <div class="content-box">
            <div class="img">1</div>
            <div class="tp">
              <div class="txt">Uang tunai 2x</div>
              <div class="price">Rp5.000</div>
              <div class="tips">Sold 245729</div>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="content-box">
            <div class="img">1</div>
            <div class="tp">
              <div class="txt">Uang tunai 2x</div>
              <div class="price">Rp5.000</div>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="content-box">
            <div class="img">1</div>
            <div class="tp">
              <div class="txt">Uang tunai 2x</div>
              <div class="price">Rp5.000</div>
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
      keyword:''
    }
  },
  methods: {
    refresh (done) {
      this.list = []
      // this.params.pageNum = 1
      // this.getList(done)
    },
    infinite (done) {
      if (this.list.length > 25) {
        this.$refs.scroller.finishInfinite(true)
        if (this.list.length < 10) {
          document.getElementsByClassName('loading-layer')[0].style.display = 'none'
        }
        document.getElementsByClassName('pull-to-refresh-layer')[0].style.display = 'none'
      } else {
        // this.params.pageNum++
        // this.getList(done)
      }
    },
  },
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
.search {
  padding: 10px 15px;
  position: relative;

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    font-size: 14px;
    padding: 0 10px;
    background: #fff;
    border-radius: 50px;
  }
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

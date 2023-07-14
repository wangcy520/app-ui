<template>
  <div style="height:100%">
    <div class="header">
      <div>Interesting Mall</div>
      <div>online 1008</div>
    </div>
    <div class="scoll">
      <div class="banner">
        <swiper :list="imgList" v-model="activeIndex" auto :show-dots="!showDots" dots-position="center"
          style="border-radius: 5px;"></swiper>
      </div>
      <div class="tips">
        <div>Pemberitahuan</div>
        <div class="t">Selamat kepada Wulan.memenanakan hadiah Rp300.000.Mari kita beri selamat padanya</div>
      </div>
      <div class="list">
        <div style="display: flex;justify-content:space-between;padding:10px 0">
          <div>Popular</div>
          <div @click="tolist">SEMUA barang ></div>
        </div>
        <div class="content">
          <div v-for="(item, index) in goodList" :key="index" class="content-item" @click="toGoodDetail(item)">
            <div class="content-box">
              <div class="img"><img :src="item.imageUrl[0]" alt=""></div>
              <div class="tp">
                <div class="txt">{{ item.name }}</div>
                <div class="price">Rp{{ item.price | moneyFormat }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="list clearfix">
      <div class="item fl" v-for="(item, index) in itemList" :key="index" @click="toUrl(index)">
        <img :src="item.icon" alt="">
        <div class="itemName">{{ item.name }}</div>
      </div>
    </div> -->
    <div class="list_1">
        <div style="display: flex;justify-content:space-between;">
          <div>Jenis Promosi</div>
        </div>
        <div class="content">
          <div v-for="(item, index) in promosiList" :key="index" class="content-item" @click="toPromosi(item)">
            <div  class="content-box">
              <div class="img"><img :src="item.imageUrl" alt=""></div>
              <!-- <div class="tp">
                <div class="txt">{{ item.name }}</div>
                <div class="price">Rp{{ item.price }}</div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { Swiper } from "vux";
import footerBar from "../components/footerBar";
export default {
  components: { Swiper, footerBar },
  data() {
    return {
      promosiList:[
        {id:1,imageUrl:require('@/assets/img/left.png')},
        {id:2,imageUrl:require('@/assets/img/right.png')},
      ],
   
      goodList: [],
      activeIndex: 0,
      showDots: false,
      imgList: [
        { img: require("../assets/img/banner/banner2.jpg") },
        { img: require("../assets/img/banner/banner1.jpg") },
        { img: require("../assets/img/banner/banner3.jpg") }
      ],
      itemList: [
        {
          name: "预约列表",
          url: "/list",
          icon: require("../assets/img/banner/item1.png")
        },
        {
          name: "填写表单",
          url: "/form",
          icon: require("../assets/img/banner/item2.png")
        },
        {
          name: "会员管理",
          url: "/",
          icon: require("../assets/img/banner/item3.png")
        },
        {
          name: "数据统计",
          url: "/",
          icon: require("../assets/img/banner/item1.png")
        },
        {
          name: "填写表单",
          url: "/",
          icon: require("../assets/img/banner/item2.png")
        },
        {
          name: "会员管理",
          url: "/",
          icon: require("../assets/img/banner/item3.png")
        },
        {
          name: "预约列表",
          url: "/",
          icon: require("../assets/img/banner/item1.png")
        },
        {
          name: "填写表单",
          url: "/",
          icon: require("../assets/img/banner/item2.png")
        },
        {
          name: "会员管理",
          url: "/",
          icon: require("../assets/img/banner/item3.png")
        },
        {
          name: "预约列表",
          url: "/",
          icon: require("../assets/img/banner/item1.png")
        },
        {
          name: "填写表单",
          url: "/",
          icon: require("../assets/img/banner/item2.png")
        },
        {
          name: "会员管理",
          url: "/",
          icon: require("../assets/img/banner/item3.png")
        }
      ]
    };
  },
  created() {
    this.getGoodList();
   
  },
  methods: {
    toPromosi(item){
      this.$router.push({
        name: 'promosi',
        query:item.id
      });
    },
    getGoodList() {
      let data = {
        orderColumn: "",
        orderType: true,
      };
      this.$axios.post("/product-info/list", data).then(res => {
        this.goodList = res.data.data;
      });
    },
    toGoodDetail(e) {
     
      e.imageUrlCopy = this.$json.encodeObj(e.imageUrl)
      this.$router.push({
        name: "goodDetail",
        query: e
      });
    },
    toUrl(index) {
      this.$router.push({
        path: this.itemList[index].url
      });
    },
    tolist(){
      this.$router.push({
        name: "homeList",
      });
    }
  }
};
</script>

<style scoped lang="less">
.header {
  height: 40px;
  background: #01c3f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 10px;
}

.banner {
  margin: 15px;
}

.tips {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 14px;

  .t {
    font-size: 14px;
    color: #ccc;
  }
}

.list {
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;

  .content {
    display: flex;
    flex-wrap: wrap;

    .content-item {
      // flex: 1;
      width: 50%;

      .content-box {
        margin: 10px;
        border: 1px solid #ccc;

        .img img {
          height: 120px;
          background: #000;
          width: 100%;
        }

        .tp {
          margin: 15px 10px;

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
}




.list_1 {
  // margin-top: 10px;
  background-color: #fff;
  padding: 15px;

  .content {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

    .content-item {
      // flex: 1;
      width: 50%;

      .content-box {
        margin: 10px;
        // border: 1px solid #ccc;
       

        .img img {
          height: 120px;
          background: #000;
          width: 100%;
          // margin: 15px 10px;
          border-radius: 5px;
         
        }

        .tp {
          margin: 15px 10px;

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
}

.scoll {
  height: calc(100% - 70px);
  overflow: auto;
}</style>

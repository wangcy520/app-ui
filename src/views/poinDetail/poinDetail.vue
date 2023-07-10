<template>
    <div>
        <div class="">
            <swiper height="300px" :list="imgList" v-model="activeIndex" auto :show-dots="!showDots" dots-position="center"
                style="border-radius: 5px;"></swiper>
        </div>
        <div class="content">
            <div style="background-color: #fff;padding: 20px">
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <div style="display: flex;align-items: center;">
                     
                        <span class="redClass1">{{obj.points}}</span>
                        <span class="blackClass" style="color: red;margin-left: 5px;">points</span>
                        
                      
                    </div>
                    <van-icon name="share-o" />
                </div>
                <div style="margin-top: 10px;">
                    <span class="blackClass">{{obj.name}}</span>
                    <span class="blackClass">Rp{{obj.amount }}</span>
                </div>

                <div class="content_1" style="margin-top: 10px;">
                    <span>Inventory:{{ obj.inStock }}</span>
                    <span>Sold:{{obj.sale}}</span>
                  
                </div>

                <div style="margin-top: 10px;">
                    <span style="color: red;">{{obj.introduction}}</span>
                </div>
            </div>
            <div class="content_2">
                <span>Please select:</span>
                <van-icon name="arrow" @click="openDialg1" />
            </div>

            <div class="content_3">
                <span>Product description</span>
            </div>

            <div style="padding-bottom: 42px;padding-left: 20px;padding-right: 20px;">
               
                <div >{{obj.description}}</div>
            </div>
            <div>
                <van-popup v-model="popupShow" position="bottom" :style="{ height: '30%' }">
                    <div class="popupBox">
                      
                        <div class="popupClass">
                            <img src="@/assets/img/banner/banner2.jpg" alt="">
                            <div class="popupClass_right">
                              <span class="blackClass">{{obj.name}}    <span class="blackClass">Rp{{obj.amount }}</span></span>
                           
                                <!-- <span class="blackClass">SALDO Rp{}</span> -->
                                <div>
                                    <span style="color: red;">Points</span>
                                <span  style="color: red;font-size: 16px;">{{obj.points}}</span>
                                <span style="font-size: 12px;">Inventory: {{obj.sale}}</span>
                                </div>
                               
                            </div>
                        </div>

                        <!-- <div style="margin-top: 20px;margin-bottom: 10px;">
                            <span>Jumlah</span>
                        </div>

                        <div class="numBox">
                            <van-stepper v-model="valueNumber" />
                            <div class="numBox_right">
                                <span>Total harga Rp5.000</span>
                                <span>Tingkat kemenangan:50%</span>
                            </div>
                        </div> -->


                    </div>
                </van-popup>
            </div>
        </div>

        <div class="bottomBut">
            <div class="bottomBut_left" @click="toHome">
                <img src="@/assets/img/off1.png" alt="">
                <span>Home</span>
            </div>

            <div>
                <van-button @click="openDialg" class="submitBtn" round type="">Bayar</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper } from "vux";

export default {
  components: { Swiper },
  data() {
    return {
      vipIcon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAVCAYAAAA5BNxZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNmVhODdiZC0zYWY5LTEzNDYtYjYyYy1hZGE1MDVmMDUxMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MURGMzA2REQyMDNEMTFFOTkxOUVDOTNCMjU4MDcwQjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MURGMzA2REMyMDNEMTFFOTkxOUVDOTNCMjU4MDcwQjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk2ZWFjMGYtNDI3MC0yZDRlLThiYTItYjE4OTA2YzRiOWVlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDg3NDQyZTItM2M1ZC1iNDRkLTljYmUt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',

      obj:{},
      valueNumber: 1,
      popupShow: false,
      activeIndex: 0,
      showDots: false,
      imgList: [
        { img: require("@/assets/img/banner/banner2.jpg") },
        { img: require("@/assets/img/banner/banner1.jpg") },
        { img: require("@/assets/img/banner/banner3.jpg") }
      ]
    };
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "index"
      });
    },
    openDialg1() {
      this.popupShow = true;
    },
    openDialg() {
      if (this.popupShow) {
  
        this.$router.push({
          name: "submitPoinOrder",
          query:this.obj
        });
      } else {
        this.popupShow = true;
      }
    },
  },
  mounted(){
    this.obj = this.$route.query
    console.log(this.obj)
  }
};
</script>

<style scoped>
.content {
  /* padding: 20px; */
}

.redClass {
  color: red;
  font-weight: bold;
}

.redClass1 {
  color: red;
  font-weight: bold;
  font-size: 25px;
}

.blackClass {
  font-weight: bold;
}

.content_1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.content_2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 10px;
  height: 40px;
  padding: 0 20px;
}

.content_3 {
  background-color: #fff;
  display: flex;
  margin-top: 10px;
  height: 40px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
}

.bottomBut {
  height: 40px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9010;
  margin: 10px;
  margin-bottom: 0px;
  width: 96%;
}

.bottomBut_left img {
  width: 20px;
  height: 20px;
}

.bottomBut_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.submitBtn {
  width: 200px;
  background-color: orange;
  color: #fff;
}

.popupBox {
  padding: 20px;
}
.popupClass {
  display: flex;
}
.popupClass_right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
}
.popupClass img {
  width: 70px;
  height: 70px;
}
.numBox {
  display: flex;
}
.numBox_right {
  flex: 1;
  margin-left: 20px;
  font-size: 12px;
  color: red;
  text-align: right;
}
.vipIcon{
  width: 30px;
  height: 15px;
}
</style>

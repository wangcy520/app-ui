<template>
    <div class="content">
        <div class="topItem">
            1 item
        </div>
        <div class="popupClass">
            <img :src="list.imageUrl" alt="">
            <div class="popupClass_right">
                <div style="display: flex;justify-content: space-between;width: 100%;">
                    <span class="blackClass">{{list.productName}}</span>
                    <span>x{{ list.productCount }}</span>
                </div>
                <div>
                    <span style="color: red;">Rp{{ list.price | moneyFormat }}</span>
                    <span style="color: red;font-size: 16px;"></span>
                </div>
            </div>
        </div>
        <div class="center">
            <span>Metode Pembayaran</span>
            <div class="center_1">
                <div class="center_1_round">Rp</div>
                <div class="center_1_c">Bayar via saldo</div>
                <div class="center_1_r">
                    <div>Saldo tersedia</div>
                    <div>Rp {{balance}}</div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <span>Total harga</span>
            <span style="color: #b7adad;">Rp{{ (list.price * list.productCount) | moneyFormat }}</span>
        </div>
        <div class="bottomBut">
            <div class="bottomBut_left">
                <span>Total: </span>
                <span style="color: red;">Rp{{ (list.price * list.productCount) | moneyFormat }}</span>
            </div>
            <div>
                <van-button v-if="!hideButton" class="submitBtn" round type="" @click="submit">Bayar</van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hideButton:false,
            list: {},
            balance:localStorage.getItem('balance')
            // obj:{}
        }
    },
    methods: {
        getGoodList() {
            let data = {
                productId: this.obj.productId,
                count: Number(this.obj.count),
            };
            this.$axios.post("/player-order/create", data).then(res => {
                if(res.data.code==500){
                    this.list = this.obj.item
                if(res.data.message.indexOf('Only vip buy')!=-1){
                    this.hideButton = true
                }
              }else{
                this.list = res.data.data;
              }
            });
        },
        submit() {
            let data = {
                orderId: this.list.id
            }
            this.$axios.post("/player-order/pay", data).then(res => {
                let data = res.data.data
                this.$router.replace({
                    name: "paySuccess",
                    query:data
                });
            });
        },
    },
    mounted() {
        this.obj = this.$route.query
        if(!this.obj.orderNo){
            this.getGoodList()
        }else{
            this.list = this.obj
        }
        console.log(this.list)      
    }
}
</script>

<style scoped>
.popupClass {
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid rgb(237, 229, 229);
}

.popupClass_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;
    flex: 1;
}

.popupClass img {
    width: 70px;
    height: 70px;
}

.topItem {
    background-color: #fff;
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
    margin-top: 5px;
}

.content {}

.center {
    background-color: #fff;
    padding: 10px;
    margin-top: 10px;
}

.center_1 {
    display: flex;
    margin-top: 10px;
    border: 1px solid red;
    padding: 5px 10px;
    align-items: center;
}

.center_1_round {
    border-radius: 50%;
    background-color: orange;
    color: #fff;
    padding: 1px;
}

.center_1_c {
    font-size: 12px;
    color: red;
    margin-left: 10px;
}

.center_1_r {
    font-size: 12px;
    color: #b7adad;
    margin-left: 80px;
}

.bottom {
    height: 40px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 10px;
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

}

.submitBtn {
    width: 100px;
    background-color: red;
    color: #fff;
}
</style>
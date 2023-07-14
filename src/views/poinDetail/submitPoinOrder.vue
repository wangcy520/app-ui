<template>
    <div class="content">
        <div class="topItem">
            1 item
        </div>
        <div class="popupClass">
            <img :src="obj.imageUrl" alt="">
            <div class="popupClass_right">
                <div style="display: flex;justify-content: space-between;width: 100%;">
                    <span class="blackClass">{{obj.name}}</span>
                    <span>x1</span>
                </div>
              
            </div>
        </div>

        <div class="center">
            <span>Phone</span>
            <div class="center_10">
                6281223219726
            </div>
        </div>


        <div class="center">
            <span>Payment Method</span>
            <div class="center_1">
                <div class="center_1_round">￥</div>
                <div class="center_1_c">Pay with points</div>
                <div class="center_1_r">
                    <div>Available points.108</div>
                   
                </div>
            </div>
        </div>
       
        <div class="bottomBut">
            <div class="bottomBut_left">
                <span>Total: </span>
                <span style="color: red;">{{ obj.points }} <span>Points</span> </span>
            </div>
            <div>
                <van-button class="submitBtn" round type="" @click="submit">Check Out</van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: {},
            obj:{}
        }
    },
    methods: {
        getGoodList() {
            let data = {
                productId: this.obj.productId,
                count: Number(this.obj.count),
            };
            this.$axios.post("/player-order/create", data).then(res => {
                console.log(res.data.data)
                this.list = res.data.data;
            });
        },
        submit() {
            let data = {
                pointId: this.obj.id
            }
            this.$axios.post("/point-exchange/check?pointId="+this.obj.id, data).then(res => {
                let data = res.data.data
                this.$toast({
                    msg: 'success',
                    type: 'success'
                })

                setTimeout(()=>{
                    this.$router.push({
                    name: "mine",
                  
                });
                },500)
            
            });

        }
    },
    mounted() {
        this.obj = this.$route.query
        // this.getGoodList()
        console.log(this.obj)
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

.center_10 {
    display: flex;
    margin-top: 10px;
   
    background-color: #f6f2f2;
    padding: 5px 10px;
    align-items: center;
}

.center_1_round {
    border-radius: 50%;
    background-color: orange;
    color: #fff;
    padding: 1px;
    width: 20px;
    height: 20px;
    text-align: center;
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
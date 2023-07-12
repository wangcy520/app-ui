<template>
    <div class="mainPage">
        <div class="header">GANJIL ATAU GENAP</div>
        <div class="content">
            <div style="line-height: 100px;">mulai bermain game</div>
            <div style="display: flex;justify-content: space-around;align-items: center;width: 100%;">
                <div class="tips" @click="tabs(1)" :class="[num == 1 ? 'active' : '']">
                    Nomorganjil</div>
                <div class="tips" @click="tabs(0)" :class="[num == 0 ? 'active' : '']">
                    Nomorgenap</div>
            </div>
            <div style="line-height: 100px;">
                <span
                    style="background: rgb(250,201,79);color: #fff;padding: 10px;border: 1px solid #cabebe;border-radius: 5px;"
                    @click="submit">Konfirmasikan pilihan</span>
            </div>
        </div>
        <div class="list">
            <div class="list-title">
                <div>Waktu</div>|
                <div>lsu</div>|
                <div>Nomor</div>|
                <div>Hasil</div>
            </div>
            <div class="list-item" v-for="(item, index) in list" :key="index">
                <div>{{ item.openTime }}</div>
                <div>{{ item.issue }}</div>
                <div>{{ item.number }}</div>
                <div>
                    <span style="background:rgb(0,195,249);color: #fff;padding: 5px 10px;border-radius: 5px;">Even&68</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Dialog } from 'vant';
export default {
    name: 'games',
    data() {
        return {
            list: [],
            num: null
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.$axios.get('/lottery-record/list', {}).then(res => {
                this.list = res.data.data
            })
        },
        tabs(e) {
            this.num = e
        },

        submit() {
            if (this.num) {
                this.$toast({
                    msg: 'Perubahan sukses',
                    type: 'success'
                })
                return
            }
            let data = {
                orderId: this.obj.id,
                num: this.num
            }
            this.$axios.post('/player-order/choose?orderId=' + this.obj.id + '&num=' + this.num,).then(res => {
                let data = res.data.data
                Dialog.alert({
                    title: 'Sukses',
                    message: `Prediksi ini berhasil, Silakan tunggu hasil ${res.data.lotteryId}`,
                    confirmButtonText: 'Konfirmasikan'
                }).then(() => {
                    this.$router.push({
                        name: "payDetails",
                        query:data
                    });
                });
            })


        }
    },
    mounted() {
        this.obj = this.$route.query
        console.log(this.obj)
    }
}
</script>
  
<style scoped lang="less">
.mainPage {
    height: 100%;
    // background-color: #fff;
}

.header {
    height: 40px;
    background: #4cadb5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.content {
    // height: 300px;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    background: #fff;
}

.list-title {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    background: rgb(255, 65, 65);
}

.list-item {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    color: #000;
    background: #ffffff;
    font-size: 12px;
}

.list-item div {
    width: 25%;
    text-align: center;
}

.tips {
    width: 100px;
    height: 130px;
    background: rgb(250, 201, 79);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cabebe
}

.active {
    color: #395ba9;
    background: #fac94f;
    border: 2px solid #e49608;
    text-shadow: 2px 2px 2px #e49608;
}
</style>
  
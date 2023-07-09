<template>
    <div>
        <div class="details">
            <div class="box">
                <div class="details-icon">icon</div>
                <div class="tips">Pembayaran berhasil</div>
            </div>
            <div class="van-hairline--top"></div>
            <div class="details-item">
                <div>Pesanan No:</div>
                <div class="gran">{{ obj.orderNo }}</div>
            </div>
            <div class="details-item">
                <div>Waktu pesanan:</div>
                <div class="gran">{{ obj.createdTime }}</div>
            </div>
            <div class="details-item">
                <div>Metode Pembayaran:</div>
                <div class="gran">{{ obj.playType }}</div>
            </div>
            <div class="details-item">
                <div>Total harga:</div>
                <div class="gran">rp {{ obj.price }}</div>
            </div>
            <div class="van-hairline--bottom"></div>
            <div class="btns">
                <van-button style="width:100%;margin: 20px 0;" type="danger" round @click="submit">Game
                    populer@</van-button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            obj: {}
        }
    },
    methods: {
        submit() {
            let data = this.obj
            this.$router.push({
                name: "games",
                query:data
            });
        }
    },
    mounted() {
        this.obj = this.$route.query
    }
}
</script>
  
<style scoped lang="less">
.details {
    margin-top: 10px;
    background: #fff;
    padding: 0 10px;
    margin: 0 10px;
}

.details-item {
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.gran {
    color: #ccc;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.details-icon {
    width: 100px;
    height: 100px;
    background: #000;
    margin: 10px;
}

.tips {
    font-weight: 600;
    font-size: 16px;
}</style>
  
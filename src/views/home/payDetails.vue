<template>
    <div style="height: 100%;">
        <div class="header">Points exchange zone</div>
        <div class="scoll">
            <div class="top">
                <div style="font-weight: 500;">Penjual belum mengirim produk, mohontunggu</div>
                <div>2023-07-03 17:08:19</div>
            </div>
            <div class="pay">
                <div class="pay-title">1 item</div>
                <div class="pay-item">
                    <div class="pay-icon">icon</div>
                    <div class="font">
                        <div>Uang tunai 2x</div>
                        <div style="color:red">Rp5.000</div>
                    </div>
                    <div class="num">x1</div>
                </div>
            </div>
            <div class="details">
                <div class="details-item">
                    <div>Pesanan No:</div>
                    <div class="gran">{{obj.orderNo}}</div>
                </div>
                <div class="details-item">
                    <div>Waktu pesanan:</div>
                    <div class="gran">{{obj.createdTime}}</div>
                </div>
                <div class="details-item">
                    <div>Jenis pesanan:</div>
                    <div class="gran">{{obj.type}}</div>
                </div>
                <div class="details-item">
                    <div>Status pembayaran:</div>
                    <div class="gran">Sudah dibayar</div>
                </div>
                <div class="details-item">
                    <div>Status promosi:</div>
                    <div class="gran">Promosi sukses</div>
                </div>
                <div class="details-item">
                    <div>Period promosi:</div>
                    <div class="gran">{{obj.lotteryId}}</div>
                </div>
                <div class="details-item">
                    <div>Game promosi:</div>
                    <div class="gran">{{obj.playType}}</div>
                </div>
                <div class="details-item">
                    <div>Waktu membukaan:</div>
                    <div class="gran">{{obj.orderTime}}</div>
                </div>
                <div class="details-item">
                    <div>Pilihan saya:</div>
                    <div class="gran">{{obj.chooseNum}}</div>
                </div>
                <div class="details-item">
                    <div>Metode Pembayaran:</div>
                    <div class="gran">Pembayaran saldo</div>
                </div>
            </div>
            <div class="bottom">
                <div class="total">
                    <div>Total Amount:</div>
                    <div>Rp {{obj.price * obj.productCount}}</div>
                </div>
                <div class="price">Amount paid:<p style="color:red">Rp {{obj.price}}</p>
                </div>
            </div>
        </div>
        <div class="btns">
            <span class="btn">Memesanan ulang</span>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            obj:{}
        }
    },
    methods: {

    },
    mounted(){
        this.obj = this.$route.query
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

.top {
    padding: 20px;
    background: #fff;
}

.pay {
    margin-top: 10px;
    background: #fff;
    // display: flex;
}

.pay-title {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.pay-item {
    display: flex;
    padding: 10px;
}

.pay-icon {
    width: 30%;
    height: 70px;
}

.font {
    width: 40%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
}

.num {
    width: 30%;
    display: flex;
    justify-content: end;
}

.details {
    margin-top: 10px;
    background: #fff;
    padding: 10px;
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

.bottom {
    margin-top: 10px;
    background: #fff;
    padding: 10px;
}

.total {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ccc
}

.price {
    display: flex;
    justify-content:flex-end;
    padding: 10px 0;
}

.btns {
    position: fixed;
    height: 40px;
    bottom: 0;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.btn {
    padding: 0.05rem 0.1rem;
    border: 0.01rem solid #ccc;
    border-radius: 0.1rem;
    color: #ccc;
}

.scoll {
    height: calc(100% - 70px);
    overflow: auto;
}
</style>
  
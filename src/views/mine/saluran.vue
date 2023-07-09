<template>
    <div class="mainPage">
        <div class="header">GANJIL ATAU GENAP</div>
        <div class="content">
            <div class="title">IDR 20.000</div>
            <div class="tips">Silakan masukan informasi dan pilih metodepembayaran Anda</div>
            <div class="items">
                <div class="left">Metode</div>
                <div class="right">DANAWALLET</div>
            </div>
            <div class="btn">
                Kirimkan
            </div>
        </div>
    </div>
</template>
  
<script>
import { Dialog } from 'vant';
export default {
    name: 'saluran',
    data() {
        return {

        }
    },
    methods: {
        submit() {
            Dialog.alert({
                title: 'Sukses',
                message: 'Prediksi ini berhasil, Silakan tunggu hasil 6230703335',
                confirmButtonText:'Konfirmasikan'
            }).then(() => {
                // on close
            });
        }
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
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
}
.content{
    background: #fff;
    padding: 10px;
}
.content .title{
    font-size: 22px;
    padding-bottom: 10px;
}
.content .tips{
    font-size: 16px;
    padding-bottom: 10px;
}
.items{
    display: flex;
}
.left{
    padding:10px;
    border: 1px solid #ccc;
    border-radius: 50px;
}
.right{
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom:1px solid #ccc;
    margin-left: 1%;
}
.btn{
    width: 100%;
    height: 40px;
    background:#01c3f7;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 10px;
    margin: 40px 0;
}
</style>
  
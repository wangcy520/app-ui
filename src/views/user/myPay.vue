<template>
    <div>
        <van-popup v-model="show">
            <div class="dialogBox">
                <div style="font-weight: 700;text-align: center;padding:10px 0">Buka ikatan rekening bank ini</div>
                <div class="dialogBox_1">
                    <div class="dialogItem">
                        <input v-model="ggCode" placeholder="Sandi tarik" class="dialogItem_right">
                    </div>
                    <div style="display: flex;justify-content: space-around;">
                        <van-button @click="show = false" class="dialogBtn" type="default">Verify Bind</van-button>
                        <van-button @click="show = false" class="dialogBtn1" type="default">Tutup</van-button>
                    </div>
                    <div style="text-align: right;color:#ddd">Lupa kata sandi penarikan</div>
                </div>
            </div>
        </van-popup>
        <van-popup v-model="show2">
            <div class="dialogBox2">
                <div style="font-weight: 700;text-align: center;padding:10px 0">Ubah kata sandi penarikan</div>
                <div class="dialogBox_1">
                    <div class="dialogItem">
                        <input v-model="ggCode" placeholder="Kata sandi lama" class="dialogItem_right">
                    </div>
                    <div class="dialogItem">
                        <input v-model="ggCode" placeholder="Kata sandi baru" class="dialogItem_right">
                    </div>
                    <div class="dialogItem">
                        <input v-model="ggCode" placeholder="Konfirmasi kata sandi" class="dialogItem_right">
                    </div>
                    <div style="display: flex;justify-content: space-around;">
                        <van-button @click="show2 = false" class="dialogBtn" type="default">Konfirmasi</van-button>
                        <van-button @click="show2 = false" class="dialogBtn1" type="default">Tutup</van-button>
                    </div>
                    <div style="text-align: right;color:#ddd">Lupa kata sandi penarikan</div>
                </div>
            </div>
        </van-popup>
        <div class="header">
            <span>Bank saya</span>
        </div>
        <div class="box">
            <div class="box_1 item_1">
                <span class="title">Pilih Bank</span>
                <input v-model="nickName" type="text">
            </div>
            <div class="box_1 item_2">
                <span class="title">Bank</span>
                <div class="item_right">
                    <span>1693499</span>
                </div>

            </div>
            <div class="box_1 item_2">
                <span class="title">Detail bank</span>
                <div class="item_right">
                    <span>6281223219726</span>
                </div>

            </div>
            <div class="box_1 item_2">
                <span class="title">Akun</span>
                <div class="item_right_1">
                    <span>111111</span>
                </div>
            </div>
            <div class="box_1 item_2">
                <span class="title">Nama pemegang</span>
                <div class="item_right_1">
                    <span></span>
                </div>

            </div>
            <div class="box_1 item_2">
                <span class="title">Nomor telepon</span>
                <div class="item_right_1">
                    <span></span>
                </div>

            </div>
            <div style="margin: 0 10px;">
                <p style="color: #999;">* If you want to bind other account, please contact customer service to unbind.</p>
                <p style="color: red;">* Setelah menetapkan sandi penarikan, Anda dapat menetapkan dan melepaskan kartu bank
                    sendiri </p>
                <p style="color: rgb(0, 195, 249);">Lupakan kata sandinya</p>
            </div>
            <div class="bottomBtn">
                <van-button class="btn_2" type="info" @click="show = true">Nyahikat
                </van-button>
            </div>
            <div class="bottomBtn">
                <van-button class="btn_1" type="info" @click="show2 = true">Ubah kata sandi penarikan
                </van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {
            nickName: '1231',
            show:true,
            show2:true,
            ggCode:''
        }
    },
    methods: {

        logOut() {
            Dialog.confirm({
                title: 'Logout',
                message: 'Confirm logout?',
            })
                .then(() => {
                    // on confirm
                    window.localStorage.removeItem('token')
                    this.$router.replace({
                        name: 'login'
                    })
                })
                .catch(() => {
                    // on cancel
                });

        },


        toPassword() {
            this.$router.push({
                name: 'editPassword'
            })
        }
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

.box_1 {
    background-color: #fff;
    margin-top: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: #333333;
    font-size: 14px;
}

.item_1 {
    border-bottom: 1px solid #f2f2f2;


}

.title {
    width: 150px;
    margin-left: 10px;
}

.item_1 input {
    text-align: left;
}

.item_2 {
    margin-top: 0px;
    border-bottom: 1px solid #f2f2f2;
}

.bottomBtn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.btn_1 {
    width: 90%;
    border-radius: 8px;
    background-color: #00c3f9 !important;
    border: none !important;
    font-size: 18px !important;
}

.btn_2 {
    width: 90%;
    margin-top: 10px;
    border-radius: 8px;
    color: #fff !important;
    border: none !important;
    background-color: #ccc !important;
}
.dialogBox {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // width: 100%;
    // height: 100%;
  
  }
  
  .dialogBox_1 {
    padding: 20px 10px;
    height: 180px;
    width: 330px;
  
  }
  
  .van-popup--center {
    border-radius: 10px;
  }
  
  .dialogItem {
    height: 50px;
    display: flex;
    border-bottom: 1px solid #d5d2d2;
    font-size: 14px;
    align-items: center;
  
  }
  
  .dialogItem_right {
    margin-left: 20px;
  }
  
  .dialogItem_1 {
    display: flex;
    padding-top: 10px;
    font-size: 16px;
  }
  
  .dialogItem_1 img {
    height: 100px;
    width: 100px;
    // margin: 10px 0;
  }
  
  .dialogItem_1_right {
    margin-left: 10px;
  }
  
  .dialogBtn {
    background-color: #01c3f7;
    border-radius: 10px;
    margin-top: 30px;
    color: white;
    font-size: 18px;
    width: 150px;
  }
  .dialogBtn1 {
    background-color: #b4b7be;
    border-radius: 10px;
    margin-top: 30px;
    color: #fff;
    font-size: 18px;
    width: 150px;
  }
  .dialogBox2{
    height: 300px;
  }
</style>
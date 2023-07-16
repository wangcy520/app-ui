<template>
    <div>

        <div class="header">
            <!-- <van-icon name="arrow-left" /> -->
            <span>User profile</span>
        </div>
        <div class="box">
            <div class="box_1">
                Kelola akun saya
            </div>

            <div class="box_1 item_1">
                <span>nickName</span>
                <input v-model="nickName" type="text">
            </div>

            <div class="box_1 item_2">
                <span>ID</span>
                <div class="item_right">
                    <span>1693499</span>
                    <van-icon style="margin-left: 5px;" name="bag-o" />
                </div>

            </div>


            <div class="box_1 item_2">
                <span>HP</span>
                <div class="item_right">
                    <span>6281223219726</span>
                    <van-icon style="margin-left: 5px;" name="bag-o" />
                </div>

            </div>


            <div class="box_1 item_2">
                <span>Kata sandi</span>
                <div class="item_right_1">
                    <span>Klik untuk mengubah katasandi</span>
                    <van-icon @click="toPassword" style="margin-left: 5px;" name="arrow" />
                </div>

            </div>

            <div class="bottomBtn">
                <van-button class="btn_1" round type="info">Simpan</van-button>
                <van-button @click="logOut" class="btn_2" round type="info">Menghapuskan</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {
            nickName: '1231'
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
                        name:'login'
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

<style scoped>
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
    height: 60px;
    display: flex;
    align-items: center;

    padding: 0 10px;
    color: #282828;
    font-size: 16px;
}

.item_1 {
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;


}

.item_1 input {
    text-align: right;
    color: #868686;
}

.item_2 {
    margin-top: 0px;
    border-bottom: 1px solid #f2f2f2;
    justify-content: space-between;
}

.item_right {
    display: flex;
    align-items: center;
    color: #868686;

}

.item_right_1 {
    /* display: flex; */
    /* align-items: center; */
    width: 50%;
    color: #868686;
    text-align: right;
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
    background-color: #f73e46 !important;
    border: none !important;
}

.btn_2 {
    width: 90%;
    margin-top: 10px;

    color: #ff3700 !important;
    border: 1px solid #ff3700 !important;
    background-color: white !important;
}
</style>
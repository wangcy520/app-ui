<template>
  <div class="content">
    <div class="top">
      <img src="@/assets/img/banner/banner2.jpg" alt="">
      <div class="top_1">
        Interesting Mall
      </div>

      <div class="top_2">
        Login akun
      </div>
    </div>


    <div class="item">
      <van-icon size="20" name="manager-o" />
      <span style="margin-left: 10px;">+62</span>
      <van-icon size="20" name="arrow-down" />
      <van-field placeholder="Masukkan nomor telepon Anda" class="inputClass" v-model="phone" type="tel" label="" />
    </div>

    <div class="item">
      <van-icon size="20" name="bag-o" />
      <van-field class="inputClass" placeholder="lsi kata sandi Anda" v-model="password" type="password" label="" />
    </div>


    <div class="rTip">
      <div class="rTip_1">1. Lupa kata sandi</div>
      <div>2. Lupa kata sandi</div>
    </div>

    <div>
      <div>
        <van-button @click="login" class="btn" type="primary">Login</van-button>
      </div>
    </div>


    <div class="bot_tip">
      <span>
        Belum memiliki akun?
      </span>
      <span @click="toRegister" style="color: rgb(1, 195, 247);">
        Daftar
      </span>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    toRegister() {
      this.$router.push({
        name: 'register'
      })
    },

    login() {
      if (!this.phone ||!this.password) {
        return this.$toast({
          msg: 'Username dan password salah',
          type: 'fail'
        })

      }
      let data = {
        phone: this.phone,
        password: this.password
      }
      this.$axios.post('/account/login', data).then(res => {
        this.$toast({
          msg: '登录成功',
          type: 'success'
        })
        window.localStorage.setItem('token', res.data.data)

        setTimeout(() => {
          this.$router.push({
            name: 'mine'
          })
        }, 500)


      })
    }
  }

}
</script>

<style scoped>
.content {
  background-color: #fff;
  position: relative;
  height: 100%;
  padding: 20px;
}

.item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(222, 221, 221, 0.851);
}

.inputClass {
  margin-left: 10px;
}

.btn {
  background-color: rgb(1, 195, 247);
  border: rgb(1, 195, 247);
  width: 100%;
  margin-top: 20px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.top img {
  width: 80px;
  height: 80px;
}

.top_1 {
  font-size: 12px;
  margin-top: 10px;
}

.top_2 {
  font-weight: bold;
  height: 40px;
  border-bottom: 3px solid rgb(1, 195, 247);
  line-height: 40px;
  margin-top: 10px;
}

.bot_tip {
  text-align: center;
  margin: 20px 0;
}

.rTip {
  text-align: right;
  color: #969799;

}

.rTip_1 {
  margin: 10px 0;
}</style>
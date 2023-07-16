<template>
  <div>
    <div class="header">
      <!-- <van-icon name="arrow-left" /> -->
      <span>Ubah kata sandi</span>
    </div>
    <div class="box">

      <div class="item">
        <input v-model="password1" placeholder="Kata sandi saat ini" type="text">
      </div>

      <div class="item">
        <input v-model="password2" placeholder="Kata sandi baru" type="text">
      </div>

      <div class="item">
        <input v-model="password3" placeholder="konfirmasi kata sandi baru" type="text">
      </div>

      <div class="bottomBtn">

        <van-button @click="submit" class="btn_2" round type="info">konfirmasi perubahan</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password1: '',
      password2: '',
      password3: ''
    }
  },
  methods: {
    submit() {

      if(!this.password1){
        this.$toast({
            msg: 'Please enter you current password',
            type:'fail'
          })
          return
      }
      if(!this.password2){
        this.$toast({
            msg: 'Please enter you new password',
            type:'fail'
          })
          return
      }

      if(!this.password3){
        this.$toast({
            msg: 'Please enter you new password again',
            type:'fail'
          })
          return
      }

      if(this.password3 != this.password2){
        this.$toast({
            msg: 'Password does not match',
            type:'fail'
          })
          return
      }

      let obj = {
        "oldPassword": this.password1,
        "newPassword": this.password2
      }
      this.$axios.post('/account/resetPassword', obj).then(res => {
        this.$toast({
            msg: res.data.message,
            type:'success'
          })
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

.box {
  width: 100%;
  height: 100%;

  background-color: white;
  position: relative;
  padding: 40px;

}

.item {
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f0f0f0;

}

.item input {
  width: 100%;
}

.bottomBtn {
  width: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

.btn_2 {

  width: 100%;
  background-color: #f73e46 !important;
  border: none;
}</style>
<template>
  <div class="content">
    <div class="top">
      Daftarkan Akun
    </div>


    <div class="item">
      <van-icon size="20"  name="manager-o" />
      <span style="margin-left: 10px;">+62</span>
      <van-icon size="20" name="arrow-down" />
      <van-field placeholder="8**********" class="inputClass" v-model="phone" type="tel" label="" />
    </div>

    <div class="item">
      <van-icon size="20" name="bag-o" />
      <van-field class="inputClass" placeholder="lsi kata sandi Anda" v-model="password" type="password" label="" />
    </div>

    <div class="item">
      <van-icon size="20" name="bag-o" />
      <van-field class="inputClass" placeholder="Konfirmasi sandi" v-model="surePassword" type="password" label="" />
    </div>

    <div>
      <div >
        <van-button @click="register" class="btn" type="primary">Daftar</van-button>
      </div>
    </div>

    <div class="bot_tip">
      <span style="color: #969799;">
        Have an existing account?
      </span>
      <span @click="toLogin" style="color: rgb(1, 195, 247);">
        Login
      </span>
     
    </div>

    <div style="text-align: center;color: #969799;">

      Dengan mengklik "daftar" kamu menyetujui syarat dengan Interesting mall
      <span style="color: rgb(1, 195, 247);">Kebiiakan Privasi</span> 
    </div>

  


  </div>
</template>

<script>
export default {
  data(){
    return{
      phone:'',
      password:'',
      surePassword:''
    }
  },
  methods:{
    toLogin(){
      this.$router.push({
        name: 'login'
      })
    },
    register(){
     
      if(!this.phone){
        return this.$toast({
          msg: 'Nomor ponsel tidak benar: (0)8*********',
          type: 'fail'
        })

    
      }

      if(!this.password){
        return this.$toast({
          msg: 'Tolong isi kata sandi anda',
          type: 'fail'
        })

    
      }

      if(!this.surePassword ||  this.password!=this.surePassword){
        return this.$toast({
          msg: 'Kata sandi yang dimasukkan dua kali tidak konsisten',
          type: 'fail'
        })
      
      }

      

     let data = {
      phone:this.phone,
     password: this.password
     }
     this.$axios.post('/account/register',data).then(res=>{
      this.$toast({
        msg: '注册成功',
         type: 'success'
      })
      setTimeout(()=>{
        this.$router.push({
        name: 'login'
      })
      },500)
   

     })
    }
  }
}
</script>

<style scoped>
.top{
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
 /* padding-top:20px ; */
}

.content{
  background-color: #fff;
  position: relative;
  height: 100%;
  padding: 20px;
}

.item{
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(222, 221, 221, 0.851);
}
.inputClass{
  margin-left: 10px;
}
.btn{
  background-color: rgb(1, 195, 247);
  border: rgb(1, 195, 247);
  width: 100%;
  margin-top: 20px;
}

.bot_tip{
  text-align: center;
  margin: 20px 0;
}
</style>
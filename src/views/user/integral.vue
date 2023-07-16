<template>
  <div>
    <div class="header">
      <span>Details of points</span>
    </div>

    <div class="top">
        <div class="top_1">
            <span class="top_2">Poin saat ini</span>
            <span class="top_3">164</span>
            <div class="top_4"></div>
        </div>


        <div class="top_center">
            <div class="top_item">
                <span>70</span>
                <span>Akumulasl poln</span>
            </div>
            <div class="top_item">
                <span>0</span>
                <span>AkumulasI konsumsl</span>
            </div>
            <div class="top_item">
                <span>0</span>
                <span>Diperoleh harl Inl</span>
            </div>
        </div>

        <div class="top_botm" >
            <div @click="chooseItem(1)" class="top_botm_left" :class="{'top_botm_check':choose==1}">
                <van-icon size="25px" name="orders-o" />
                <span>Catatan poin</span>
            </div>

            <div  @click="chooseItem(2)" class="top_botm_right" :class="{'top_botm_check':choose==2}">
                <van-icon size="25px" name="upgrade" />
                <span>Meningkatkan poin</span>
            </div>

            
        </div>
    </div>



    <div class="item_list_box" v-if="choose==1">
        <div class="item_list">
            <div class="item_list_1">
                <span>Promosi gagal dipertukarkan 2 poin</span>
                <span>2023/07/14 19:48</span>
            </div>

            <div class="item_list_2">+2</div>
        </div>

        <div class="item_list">
            <div class="item_list_1">
                <span>Promosi gagal dipertukarkan 2 poin</span>
                <span>2023/07/14 19:48</span>
            </div>

            <div class="item_list_2">+2</div>
        </div>
    </div>



    <div class="bottom_icon_list" v-if="choose==2">
        <div class="bottom_icon_list_item">
            <img src="@/assets/img/mine/money.png" alt="">
            <div class="bottom_icon_list_item_text">
                Poin yang didapat setelah membeliitem
            </div>

            <div>
                <van-button class="bottom_icon_list_item_btn" round type="info">Mendapat poin</van-button>
            </div>
        </div>


        <div class="bottom_icon_list_item">
            <img src="@/assets/img/mine/money.png" alt="">
            <div class="bottom_icon_list_item_text">
                Sign in setiap hariuntuk mendapatkanpoin
            </div>

            <div>
                <van-button class="bottom_icon_list_item_btn" round type="info">Mendapat poin</van-button>
            </div>
        </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            choose:1
        }
    },
    methods:{
        chooseItem(type){
            this.choose = type
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

.top{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: GuildfordProBook\ 5;
    padding: 0 15px;
    height: 250px;
    color: white;
    background-repeat: no-repeat;
   background-image: url(data:image/jpeg;base64,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)
}

.top_1{
    display: flex;
    flex-direction: column;
   align-items: center;
   padding-top: 15px;

}
.top_2{
   color: hsla(0,0%,100%,.8)
}
.top_3{
    font-size: 30px;
    margin-top: 10px;
}
.top_4{
    border-bottom: 1px solid white;
    height: 1px;
    width: 30px;
    margin-top: 10px;
}

.top_center{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 10px; */
}
.top_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  
}
.top_item span:last-child{
    font-size: 12px;
}
.top_botm{
    display: flex;
    height: 50px;
    /* background-color: #fff; */
    color: red;
    border-top-left-radius: 10px;

    border-top-right-radius: 10px;
    background-color: #f5f5f5;

    /* margin-top: 20px; */
}
.top_botm_left span{
    margin-left: 5px;
}
.top_botm_right span{
    margin-left: 5px;
}
.top_botm_left{
    width: 50%;
    color: #bbb;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
  
}
.top_botm_right{
    width: 50%;
    color: #bbb;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
   
}

.top_botm_check{
    color: red;
    font-weight: bold;
    background-color: #fff;
    
}
.item_list_box{
    padding: 10px;
    background-color: #fff;
}
.item_list{
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
   
}
.item_list_1{
    display: flex;
    flex-direction: column;

}
.item_list_1 span:last-child{
    margin-top: 5px;
    color: #999;
}

.item_list_2{
    font-size: 20px;
    font-family: GuildfordProBook\ 5;
    color: #16ac57;
}

.bottom_icon_list{
    background-color: #fff;
    padding: 10px;
}
.bottom_icon_list_item img{
    width: 50px;
    height: 80px;
}
.bottom_icon_list_item{
    background-image: linear-gradient(90deg,#fff7e7 0,#fffdf9);
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.bottom_icon_list_item_text{
    color: #c8a86b;
    font-weight: 700;
    margin-left: 20px;
    width: 180px;
}
.bottom_icon_list_item_btn{
    font-size: 12px;
    color: #c8a86b;
    border:1px solid #c8a86b;
    text-align: center;
    
    height: 30px;
    width: 120px;
    border-radius: 10px;
    background:none !important;
}
</style>
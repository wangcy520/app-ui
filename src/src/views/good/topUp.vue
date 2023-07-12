<template>
    <div class="content">
        <div class="topBox">
            <div class="topBox_1">
                <div class="top">
                <div class="top_text">Pilih jumlah TOP-UP</div>
            </div>

            <div class="center">
                <span>Silakan pilih iumlah dan lanjutkan</span>
                <div class="item_box">
                    <div @click="toCheck(item,index)" :class="{check:item.check}" class="item" v-for="(item,index) in list" :key="index">
                        <span>Rp{{item.price}}</span>
                       
                    </div>
                  
                </div>

                <div class="center_1">
                    Catatan: Saldo saat ini <span style="color: red;">Rp179.320</span> 
                </div>

                <div class="butBottom">
                    <div class="butBottom_1">Konfirmasi TOP-UP</div> 
                </div>
            </div>
            </div>
        
        </div>


        <div class="bottomBox">
            <div class="bottomBox_top">
                 Catatan TOP-UP
            </div>

            <div class="bottomBox_content">
                <span>Nomor pesanan:1693499202306200950422938</span>
                <span>Waktu aplikasi:2023-06-20 09:5042</span>
                <span>Jumlah TOP-UP-20.000</span>
                <span>Status Top_UP: <span style="color: green;">Sukses</span> </span>
            </div>

            <div class="bottomBox_content">
                <span>Nomor pesanan:1693499202306200950422938</span>
                <span>Waktu aplikasi:2023-06-20 09:5042</span>
                <span>Jumlah TOP-UP-20.000</span>
                <span>Status Top_UP: <span style="color: green;">Sukses</span> </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {price: '20.000',check:true},
                {price: '50.000',check:false},
                {price: '100.000',check:false},
                {price: '200.000',check:false},
                {price: '500.000',check:false},
                {price: '1000.000',check:false},
                {price: '2000.000',check:false},
                {price: '5000.000',check:false},
                {price: '10000.000',check:false},
                {price: '20000.000',check:false},
             
           ]
        }
    },
    methods:{
        toCheck(item,index){
            if(item.check) return
            if(!item.check){
                this.list.forEach(item1=>{
                    item1.check = false
                })
                this.list[index].check = true

            }
        }
    }

}
</script>

<style scoped>
.topBox {
    /* background-color: #fff; */
    /* background-color: #fff;  */
    padding: 10px;
   
}

.topBox_1 {
    /* background-color: #fff; */
    background-color: #fff; 
    padding: 10px;
   
}
.content{
 
    /* padding: 10px; */
}

.top{
    font-size: 16px;
    font-weight: bold;
    height: 40px;
   
  display: flex;
  align-items: center;
  justify-content: center;
    width: 100%;
    
   
}
.top_text{
    border-bottom: 2px solid rgb(1, 195, 247);
    padding: 10px 0;
    /* width: 200px; */
}

.center{
    margin-top: 50px;
}
.item_box{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.item{
    border: 1px solid rgb(167, 166, 166);
    padding: 10px 0;
    width: 35%;
    margin-top: 10px;
    text-align: center;
   
}
.check{
    border: 1px solid rgb(1, 195, 247);
}
.center_1{
    margin:20px 0;
    text-align: center;
}
.butBottom{
    display: flex;
    justify-content: center;
    align-items: center;
}
.butBottom_1{
   background-color: rgb(1, 195, 247);
   color: #fff;
   width: 60%;
   height: 36px;
   display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.bottomBox{
    background-color: #fff;
    margin-top: 20px;
}
.bottomBox_top{
   border-bottom: 1px solid rgb(1, 195, 247);
   margin: 0 20px;
   height: 40px;
   text-align: center;
   line-height: 40px;
}
.bottomBox_content{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-bottom: 1px dashed  rgb(98, 96, 96);
    padding-bottom: 10px;
    
}
.bottomBox_content span {
    display: inline-block;
    margin-top: 2px;
}
</style>
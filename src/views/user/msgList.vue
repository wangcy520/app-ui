<template>
    <div>
        <div class="header">
            <!-- <van-icon name="arrow-left" /> -->
            <span>Hubungi kami</span>
        </div>
        <div class="info">
            <div class="info-item">
                <div class="app" style="width:100%;text-align: center;font-size: 40px;">Telegram</div>
                <div class="hr"></div>
                <div class="email">
                    Silakan kirim email kepada kami：yyim7744@gmail.com
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
.info{
    width: 100%;
    height: 100%;
    position: fixed;
    background: #1ebea5;
}
.info-item{
    top: -150px;
    bottom: 0;
    width: 100%;
    height:25px;
    margin: auto auto;
    position: absolute;
}
.hr{
    width: 80%;
    margin:20px auto;
    height: 1px;
    background: #fff;
    position: relative;
}
.hr:after {
    content: "Atau";
    padding: 0px;
    background: #1ebea5;
    position: absolute;
    left: 0;
    right: 0;
    top: -10px;
    margin: 0 auto;
    width: 50px;
    text-align: center;
    color: #fff;
}
.email{
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 12px;
}
</style>
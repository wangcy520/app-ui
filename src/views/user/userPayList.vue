<template>
    <div style="background:#fff;height:100%">
        <div class="header">
            <span>Details of balance</span>
        </div>
        <van-tabs v-model="active" color="#e93323" title-active-color="#e93323" line-width="100px" line-height="1px">
            <van-tab title="Semua">
                <div style="margin:0 10px">
                    <div style="color: #666;">2023-07</div>
                    <div class="items">
                        <div>
                            <div style="margin-bottom: 10px;color: #282828;font-size: 16px;">Pengembalian uang promosi</div>
                            <div style="color: #999;font-size: 16px;">2023-07-13</div>
                        </div>
                        <div style="color: #16ac57;font-size: 18px;">+1000</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="Konsumsi">内容 2</van-tab>
            <van-tab title="TOP-UP">内容 3</van-tab>
            <van-tab title="Penghasilan">内容 3</van-tab>
        </van-tabs>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods: {
        toUserPay(e) {
            this.$router.replace({
                name: 'userPayList',
                query: e
            })
        }
    },
    mounted() {
        this.active = this.$route.query
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

.items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}</style>
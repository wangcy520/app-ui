<template>
    <div class="mainPage">
        <div class="header">catatan sejarah</div>
        <div class="list-title">
            <div>Waktu</div>|
            <div>lsu</div>|
            <div>Nomor</div>|
            <div>Hasil</div>
        </div>
        <div class="list scoll">
     
            <div class="list-item" v-for="(item, index) in list" :key="index">
                <div>{{ item.openTime }}</div>
                <div>{{ item.issue }}</div>
                <div>{{ item.number }}</div>
                <div>
                    <span style="background: #ffd52e;color: #6a4c14;padding: 5px 10px;border-radius: 5px;">{{item.attribute}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Dialog } from 'vant';
export default {
    name: 'games',
    data() {
        return {
            list: [],
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.$axios.get('/lottery-record/list', {}).then(res => {
                this.list = res.data.data
            })
        },
    },
    mounted() {

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
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
}

.list-title {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    background:#00c3f9;
}

.list-item {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    color: #000;
    background: #ffffff;
    font-size: 12px;
}

.list-item div {
    width: 25%;
    text-align: center;
}

.tips {
    width: 100px;
    height: 130px;
    background: rgb(250, 201, 79);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cabebe;
    text-align: center;
}

.active {
    color: #395ba9;
    background: #fac94f;
    border: 2px solid #e49608;
    text-shadow: 2px 2px 2px #e49608;
}
.scoll {
    height: calc(100% - 90px);
    overflow: auto;
}
</style>
  
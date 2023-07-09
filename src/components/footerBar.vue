<template>
    <ul>
      <li v-for="(item,i) in items" :key='i' class="w2" @click="toUrl(i)">
        <svg class="icon" aria-hidden="true" v-if="$route.path==item.url">
          <use :xlink:href="item.icon1"></use>
        </svg>
         <svg class="icon" aria-hidden="true" v-if="$route.path!==item.url">
          <use :xlink:href="item.icon2"></use>
        </svg>
        <div class="name" :class="{'c1':$route.path==item.url}">{{item.name}}</div>
      </li>
      <div class="bt1"></div>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Home',
          url: '/index',
          icon1: '#icon-index1',
          icon2: '#icon-index0'
        },
        {
          name: 'Poin',
          url: '/poin',
          icon1: '#icon-mine1',
          icon2: '#icon-mine0'
        },
        {
          name: 'Zona VIP',
          url: '/zona',
          icon1: '#icon-mine1',
          icon2: '#icon-mine0'
        },
        {
          name: 'Pesanan',
          url: '/pesanan',
          icon1: '#icon-mine1',
          icon2: '#icon-mine0'
        },
        {
          name: 'Akun',
          url: '/mine',
          icon1: '#icon-mine1',
          icon2: '#icon-mine0'
        }
      ]
    }
  },
  methods: {
    toUrl (i) {
      this.$router.replace({
        path: this.items[i].url
      })
    }
  }
}
</script>

<style scoped lang='less'>
ul {
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  li {
    flex:1;
    text-align: center;
    font-size: 12px;
    height: 55px;
    width: 50%;
    padding-top: 9px;
    .name {
      text-align: center;
      color: #888888;
      line-height: 22px;
    }
  }
}
svg{
  width: 22px !important;
  height: 22px !important;
}
</style>

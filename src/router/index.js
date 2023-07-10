import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/login/login'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/login/login'], resolve)
      }
    },
    {
      path: '/index',
      name: 'index',
      meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/index'], resolve)
      }
    },
    {
      path: '/list',
      name: 'listr',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/list'], resolve)
      }
    },
    {
      path: '/poin',
      name: 'poin',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/poin'], resolve)
      }
    },
    {
      path: '/zona',
      name: 'zona',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/zona'], resolve)
      }
    },
    {
      path: '/pesanan',
      name: 'pesanan',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/pesanan'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/mine'], resolve)
      }
    },
    {
      path: '/error',
      name: 'error',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/error'], resolve)
      }
    },
    {
      path: '/form',
      name: 'form',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/form'], resolve)
      }
    },
    {
      path: '/payDetails',
      name: 'payDetails',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/home/payDetails'], resolve)
      }
    },
    {
      path: '/games',
      name: 'games',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/home/games'], resolve)
      }
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/home/paySuccess'], resolve)
      }
    },
    {
      path: '/saluran',
      name: 'saluran',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/mine/saluran'], resolve)
      }
    },



    {
      path: '/goodDetail',
      name: 'goodDetail',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/good/goodDetail'], resolve)
      }
    },
    {
      path: '/submitOrder',
      name: 'submitOrder',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/good/submitOrder'], resolve)
      }
    },

    {
      path: '/topUp',
      name: 'topUp',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/good/topUp'], resolve)
      }
    },
    {
      path: '/register',
      name: 'register',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/login/register'], resolve)
      }
    },

    {
      path: '/promosi',
      name: 'promosi',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/promosi/promosi'], resolve)
      }
    },
    {
      path: '/poinDetail',
      name: 'poinDetail',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/poinDetail/poinDetail'], resolve)
      }
    },
    {
      path: '/submitPoinOrder',
      name: 'submitPoinOrder',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/poinDetail/submitPoinOrder'], resolve)
      }
    }
  ]
})

export default router

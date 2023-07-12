// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { get, post } from "./JS/ajax";
import utils from "./JS/utils";
// import vConsole from './JS/vconsole'
import toast from "./components/toast";
import Dialog from "./components/dialog";
import Loading from "./components/loading";
import Vant from "vant";
import "vant/lib/index.css";

import VueScroller from "vue-scroller";

Vue.use(VueScroller);
Vue.use(utils);
Vue.use(Vant);
// Vue.use(vConsole)

Vue.prototype.$toast = toast;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$loading = Loading;
Vue.prototype.$axios = { get, post };

Vue.config.productionTip = false;

let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375;
window.document.documentElement.style.fontSize = `${100 * cale}px`;



// 在此处进行配置全局的路由守卫（全局前置钩子）
// 目的是：判断当前用户中本地存储是否有token，使用户在登录之前，只能访问到/login页面，其他的页面是访问不到的。
router.beforeEach((to, from, next) => {
  // to 即将进入的路由
  // from 在哪个路由进入的
  // next 放行
  //   console.log(to); //打印的是页面要跳转到的路由,例如：它下面的path：为"/login"
  let token = localStorage.getItem("token") || ""; //在本地存储中获取token
  if (token) {
    //判断是否有token
    next();
  } else {
    //在没有token的前提下，to下面的path是否为/login，如果不是则页面跳转到登录页面
    if (to.path == "/login") {
      next();
    } else {
      next({ path: "/login" }); //跳转页面到login页
    }
  }
});

/* eslint-disable no-new */
export default new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

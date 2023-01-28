import Vue from "vue";
import Router from "./router/index";
import App from "./App.vue";


Vue.config.productionTip = false;

var a = new Vue({
  Router,
  render: (h) => h(App),
}).$mount("#app");

Router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */

  if (to.meta.content) {
    let head = document.getElementsByTagName("head");
    let meta = document.createElement("meta");
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute("content", to.meta.content.keywords);
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", to.meta.content.description);
    meta.content = to.meta.content;
    head[0].appendChild(meta);
  }
  // /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

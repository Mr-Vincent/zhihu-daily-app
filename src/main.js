import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routers from './router/router';

import store from './store'


Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
  // 使用 HTML5 的 History 路由模式
  mode: 'history',
  routes: Routers,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  router: router,
  store: store,
  el: '#app',
  render: h => h(App)
})
const routers = [
  {
      path: '/home',
      meta: {
          title: '首页'
      },
      component: (resolve) => require(['../components/content/content.vue'], resolve)
  },
  {
      path: '/theme/:id',
      meta: {
          title: '主题日报'
      },
      component: (resolve) => require(['../components/content/banner/banner.vue'], resolve)
  },
  {
      path: '*',
      redirect: '/home'
  }
];
export default routers;
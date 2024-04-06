import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
// only githubpages preview site used, if use template please remove this check
// and use `createWebHistory` is recommend

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: Home,
      children: [],
    },
  ],
});

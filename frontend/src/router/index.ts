import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

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

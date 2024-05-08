import type { App } from 'vue';
import admin from './admin';
import dragEffect from './dragEffect';
import focus from './focus';
import inputSelect from './input-select';
import perm from './perm';

export default {
  install(Vue: App) {
    Vue.directive('focus', focus);
    Vue.directive('dragEffect', dragEffect);
    Vue.directive('input-select', inputSelect);
    Vue.directive('perm', perm);
    Vue.directive('admin', admin);
  },
};

import type { App } from 'vue';
import dragEffect from './dragEffect';
import draggable from './draggable';
import focus from './focus';

export default {
  install(Vue: App) {
    Vue.directive('draggable', draggable);
    Vue.directive('focus', focus);
    Vue.directive('dragEffect', dragEffect);
  },
};

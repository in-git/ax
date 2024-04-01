import type { App } from 'vue';
import dragEffect from './dragEffect';
import draggable from './draggable';
import focus from './focus';
import inputSelect from './input-select';

export default {
  install(Vue: App) {
    Vue.directive('draggable', draggable);
    Vue.directive('focus', focus);
    Vue.directive('dragEffect', dragEffect);
    Vue.directive('input-select', inputSelect);
  },
};

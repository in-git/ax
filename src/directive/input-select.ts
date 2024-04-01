import { nextTick } from 'vue';

export default {
  created(el: HTMLInputElement) {
    nextTick(() => {
      el.select();
    });
  },
};

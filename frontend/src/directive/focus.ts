import { nextTick } from 'vue';

export default {
  created(el: HTMLElement) {
    nextTick(() => {
      el.focus();
    });
  },
};

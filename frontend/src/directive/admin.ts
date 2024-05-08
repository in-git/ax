import useUserStore from '@/store/user';

/**   */
export default {
  created(el: HTMLElement) {
    nextTick(() => {
      const store = useUserStore();
      if (store.$state.userInfo?.admin) {
        el.style.display = 'none';
      }
    });
  },
};

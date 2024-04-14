import useUserStore from '@/store/user';

export default {
  mounted(el: HTMLElement, binding: { value: string }) {
    const store = useUserStore();
    console.log(store.$state.userInfo);
    let userInfo = store.$state.userInfo;
    if (userInfo) {
      userInfo.roles.forEach(e => {
        if (!e.permissions) return;
        const hasPermissions = e.permissions.includes(binding.value);
        console.log(hasPermissions, binding.value, e.permissions);

        if (!hasPermissions) {
          el.style.display = 'none';
          el.remove();
        }
      });
    }
  },
};

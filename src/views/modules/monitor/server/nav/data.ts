interface ServerNav {
  title: string;
  id: string;
}
export const navList: ServerNav[] = [
  {
    title: 'CPU信息',
    id: 'server-cpu',
  },
  {
    title: '内存信息',
    id: 'server-memory',
  },
];
export const navIndex = ref<number>(0);
export const selectNav = (item: ServerNav, index: number) => {
  navIndex.value = index;
  const el = document.getElementById(item.id);
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
  });
};

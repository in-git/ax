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
  {
    title: '系统信息',
    id: 'server-info',
  },
];
export const navIndex = ref<number>(0);

export const selectNav = (index: number) => {
  navIndex.value = index;
  const el = document.getElementById(navList[index].id);
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
  });
};

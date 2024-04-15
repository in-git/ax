import usePageStore from '.';

export const setBackground = (src: string, type: 'image' | 'video') => {
  const store = usePageStore();
  store.$state.desktop.background.src = src;
  store.$state.desktop.background.type = type;
};

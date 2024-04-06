import usePageStore from '.';
import type { DesktopBackground } from './types';

export const setBackground = (item: DesktopBackground) => {
  const store = usePageStore();
  store.$state.desktop.background = item;
};

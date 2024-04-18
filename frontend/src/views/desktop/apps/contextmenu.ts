import type { Routers } from '@/api/modules/system/user/types';
import { minWindow } from '@/global/config/window';
import { setContextMenu } from '@/views/components/contextmenu/data';
import { DesktopOutlined, FolderFilled, ReloadOutlined } from '@ant-design/icons-vue';
import { openApp } from './data';

export const selectWallpaper = ref(false);
export const appContextMenu = (item: Routers) => {
  const e = window.event as MouseEvent;
  e.preventDefault();
  setContextMenu({
    show: true,
    items: [
      {
        label: '打开',
        key: 'open',
        icon: h(FolderFilled),
        onClick() {
          openApp(item);
        },
      },
    ],
    x: 0,
    y: 0,
  });
};
export const openContextMenu = (e: MouseEvent) => {
  e.preventDefault();
  setContextMenu({
    show: true,
    items: [
      {
        label: '刷新页面',
        key: '1',
        icon: h(ReloadOutlined),
        onClick() {
          window.location.reload();
        },
      },
      {
        label: '显示桌面',
        key: '3',
        icon: h(DesktopOutlined),
        onClick() {
          minWindow();
        },
      },
    ],
    x: 0,
    y: 0,
  });
};

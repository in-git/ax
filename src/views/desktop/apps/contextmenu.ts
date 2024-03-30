import type { Routers } from '@/api/modules/system/user/types';
import { response } from '@/utils/table/table';
import { setContextMenu } from '@/views/page/contextmenu/data';
import { AppstoreOutlined, FolderFilled, ReloadOutlined } from '@ant-design/icons-vue';
import { getUserRouters, openApp } from './data';

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
        key: 'refreshPage',
        icon: h(ReloadOutlined),
        onClick() {
          window.location.reload();
        },
      },
      {
        label: '刷新菜单',
        key: 'refreshPage',
        icon: h(AppstoreOutlined),
        onClick() {
          response(getUserRouters);
        },
      },
    ],
    x: 0,
    y: 0,
  });
};

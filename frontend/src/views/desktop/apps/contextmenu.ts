import type { Routers } from '@/api/modules/system/user/types';
import { minWindow } from '@/global/config/window';
import { setContextMenu } from '@/views/components/contextmenu/data';
import { setGallery } from '@/views/selector/gallery/data';
import {
  BgColorsOutlined,
  DesktopOutlined,
  FolderFilled,
  MenuOutlined,
  ReloadOutlined,
} from '@ant-design/icons-vue';
import { createMenuForm } from './create-menu/data';
import { openApp } from './data';

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
      {
        label: '选择壁纸',
        key: '4',
        icon: h(BgColorsOutlined),
        onClick() {
          setGallery({
            show: true,
          });
        },
      },
      {
        label: '新建',
        key: '5',
        icon: h(MenuOutlined),
        children: [
          {
            label: '创建文件夹',
            key: '5-1',
            onClick() {
              createMenuForm.value = true;
            },
          },
          {
            label: '创建链接',
            key: '5-2',
            onClick(info) {
              console.log('---', info);
            },
          },
        ],
      },
    ],
    x: 0,
    y: 0,
  });
};

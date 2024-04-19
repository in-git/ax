import type { Routers } from '@/api/modules/system/user/types';
import settingPng from '@/assets/system/system_setting.png';
import { minWindow, openWindow } from '@/global/config/window';
import { setContextMenu } from '@/views/components/contextmenu/data';
import {
  DesktopOutlined,
  FolderFilled,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import PageSetting from '../setting/PageSetting.vue';
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
        key: '2',
        icon: h(DesktopOutlined),
        onClick() {
          minWindow();
        },
      },
      {
        label: '系统设置',
        key: '2',
        icon: h(SettingOutlined),
        onClick() {
          openWindow({
            title: '系统设置',
            component: markRaw(PageSetting),
            id: 'system_setting',
            w: 800,
            h: 600,
            icon: settingPng,
          });
        },
      },
    ],
    x: 0,
    y: 0,
  });
};

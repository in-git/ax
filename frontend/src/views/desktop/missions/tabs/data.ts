import { closeWindow, setCurrentWindow, windowList } from '@/global/config/window';
import type { SystemWindow } from '@/types/system';
import { setContextMenu } from '@/views/components/contextmenu/data';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons-vue';

export const tabContextmenu = (data: SystemWindow) => {
  const e = window.event as MouseEvent;
  e.preventDefault();
  setContextMenu({
    show: true,
    items: [
      {
        label: '关闭',
        key: 'close',
        icon: h(CloseOutlined),
        onClick() {
          if (data.id) closeWindow(data.id);
        },
      },
      {
        label: '关闭其他',
        key: 'close-other',
        icon: h(DeleteOutlined),
        onClick() {
          if (data.id) {
            windowList.value = windowList.value.filter(e => {
              return e.id === data.id;
            });
            setCurrentWindow(data.id);
          }
        },
      },
    ],
    x: 0,
    y: 0,
  });
};

import { sendMsg } from '@/api/external/qian-fan/qian-fan';
import type { Routers } from '@/api/modules/system/user/types';
import { minWindow } from '@/global/config/window';
import { setContextMenu } from '@/views/components/contextmenu/data';
import { DesktopOutlined, FolderFilled, ReloadOutlined, RobotFilled } from '@ant-design/icons-vue';
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
        label: 'AI',
        key: '2',
        icon: h(RobotFilled),
        async onClick() {
          const { data } = await sendMsg({
            temperature: 0.9,
            top_p: 0,
            penalty_score: 1,
            stream: false,
            messages: [
              {
                role: 'user',
                content:
                  '现在你是一名开发工程师，我希望你的回答中只有代码代码，不要写解释，你回答的内容要能够被eval函数执行。下面是我的需求，给我一个刷新页面的JS代码',
              },
            ],
            prompt: '',
          });
          const code = data.result.replace('```javascript', '').replace('```', '');
          eval(code);
        },
      },
    ],
    x: 0,
    y: 0,
  });
};

import { getSysImage } from '@/api/utils/image';
import aiPng from '@/assets/apps/gpt.png';
import { openWindow } from '@/global/config/window';
import AI from '@/views/widget/ai/AI.vue';
import Browser from '@/views/widget/browser/Browser.vue';
import Help from '@/views/widget/help/Help.vue';
import Notepad from '@/views/widget/notepad/Notepad.vue';

export const showStarter = ref(false);
interface Plugin {
  title: string;
  icon: string;
  action: any;
  id: string;
}
export const plugins: Plugin[] = [
  {
    title: 'AI',
    icon: aiPng,
    id: 'qianFan',
    action(item: Plugin) {
      openWindow({
        component: markRaw(AI),
        ...item,
      });
      showStarter.value = false;
    },
  },
  {
    title: '记事本',
    id: 'notepad',
    icon: getSysImage('image-icon/notepad.png'),
    action(item: Plugin) {
      openWindow({
        component: markRaw(Notepad),
        ...item,
      });
      showStarter.value = false;
    },
  },
  {
    title: '帮助',
    id: 'help',
    icon: getSysImage('image-icon/help.png'),
    action(item: Plugin) {
      openWindow({
        component: markRaw(Help),
        ...item,
      });
      showStarter.value = false;
    },
  },
  {
    title: '浏览器',
    id: 'browser',
    icon: getSysImage('image-icon/edge.png'),
    action(item: Plugin) {
      openWindow({
        component: markRaw(Browser),
        ...item,
      });
      showStarter.value = false;
    },
  },
];

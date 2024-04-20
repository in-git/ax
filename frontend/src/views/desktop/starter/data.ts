import aiPng from '@/assets/apps/gpt.png';
import xterm from '@/assets/apps/xterm.png';
import notepad from '@/assets/system/notepad.png';
import { openWindow } from '@/global/config/window';
import AI from '@/views/widget/ai/AI.vue';
import Notepad from '@/views/widget/notepad/Notepad.vue';
import Xterm from '@/views/widget/xterm/Xterm.vue';

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
    icon: notepad,
    action(item: Plugin) {
      openWindow({
        component: markRaw(Notepad),
        ...item,
      });
      showStarter.value = false;
    },
  },
  {
    title: '控制台',
    id: 'xterm',
    icon: xterm,
    action(item: Plugin) {
      openWindow({
        component: markRaw(Xterm),
        ...item,
        w: 700,
        h: 460,
      });
      showStarter.value = false;
    },
  },
];

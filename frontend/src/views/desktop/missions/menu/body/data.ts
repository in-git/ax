import aiPng from '@/assets/apps/gpt.png';
import notepad from '@/assets/system/notepad.png';
import { openWindow } from '@/global/config/window';
import AI from '@/views/page/gpt/AI.vue';
import Notepad from '@/views/page/notepad/Notepad.vue';
import { showWindowMenu } from '../data';

interface Plugin {
  title: string;
  icon: string;
  action: any;
  id: string;
}
export const functionList: Plugin[] = [
  {
    title: 'AI',
    icon: aiPng,
    id: 'qianFan',
    action(item: Plugin) {
      openWindow({
        component: markRaw(AI),
        ...item,
      });
      showWindowMenu.value = false;
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
      showWindowMenu.value = false;
    },
  },
];

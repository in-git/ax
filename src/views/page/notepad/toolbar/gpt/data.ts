import chatgptPng from '@/assets/apps/gpt.png';
import { openWindow } from '@/global/config/window';
import GptIndex from '../../../gpt/GptIndex.vue';
export const chatgpt = (data: string) => {
  openWindow({
    component: markRaw(GptIndex),
    title: 'ChatGpt',
    icon: chatgptPng,
    data,
  });
};

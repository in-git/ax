import { getStaticImage } from '@/api/utils/image';
import aiPng from '@/assets/apps/gpt.png';
import { openWindow } from '@/global/window/window';
import AI from '@/views/widget/ai/AI.vue';
import Browser from '@/views/widget/browser/Browser.vue';
import Help from '@/views/widget/help/Help.vue';
import ImageVue from '@/views/widget/image/Image.vue';
import Notepad from '@/views/widget/notepad/Notepad.vue';
import Test from '@/views/widget/test/Test.vue';
import Video from '@/views/widget/video/Video.vue';

interface Plugin {
  title: string;
  icon: string;
  action: any;
  id: string;
}

export const showStarter = ref(false);

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
    icon: getStaticImage('image-icon/notepad.png'),
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
    icon: getStaticImage('image-icon/help.png'),
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
    icon: getStaticImage('image-icon/edge.png'),
    action(item: Plugin) {
      openWindow({
        component: markRaw(Browser),
        ...item,
      });
      showStarter.value = false;
    },
  },
  {
    title: '图形',
    id: 'image',
    icon: getStaticImage('image-icon/gallery.png'),
    action(item: Plugin) {
      openWindow({
        component: markRaw(ImageVue),
        ...item,
        dark: true,
      });
      showStarter.value = false;
    },
  },
  {
    title: '视频',
    id: 'video',
    icon: getStaticImage('image-icon/movies.png'),
    action(item: Plugin) {
      openWindow({
        component: markRaw(Video),
        ...item,
        dark: true,
      });
      showStarter.value = false;
    },
  },
  {
    title: '测试',
    id: 'test',
    icon: getStaticImage('image-icon/getstarted.png'),
    action(item: Plugin) {
      openWindow({
        component: markRaw(Test),
        ...item,
      });
      showStarter.value = false;
    },
  },
];

import { getStaticImage } from '@/api/utils/image';
import Browser from '@/views/widget/browser/Browser.vue';
import ImageVue from '@/views/widget/image/Image.vue';
import Notepad from '@/views/widget/notepad/Notepad.vue';
import Video from '@/views/widget/video/Video.vue';
import { openWindow } from './window';

type Notepad = {
  data: string;
  allowSave?: boolean;
};
/* 打开记事本 */
export const openNotepad = (config: Notepad) => {
  openWindow({
    title: '记事本',
    component: markRaw(Notepad),
    id: 'notepad',
    icon: getStaticImage('image-icon/notepad.png'),
    dark: true,
    data: {
      data: config.data,
      allowSave: config.allowSave,
    },
  });
};

export const openImage = (src: string) => {
  openWindow({
    title: '图片',
    component: markRaw(ImageVue),
    id: 'image',
    icon: getStaticImage('image-icon/gallery.png'),
    dark: true,
    data: {
      src,
    },
  });
};

export const openVideo = (src: string) => {
  openWindow({
    title: '视频',
    component: markRaw(Video),
    id: 'video',
    icon: getStaticImage('image-icon/movies.png'),
    dark: true,
    data: {
      src,
    },
  });
};

type BrowserProps = { src?: string; html?: string; title?: string };

export const openBrowser = (config: BrowserProps) => {
  openWindow({
    title: '浏览器',
    component: markRaw(Browser),
    id: 'video',
    icon: getStaticImage('image-icon/edge.png'),
    dark: true,
    data: config,
  });
};

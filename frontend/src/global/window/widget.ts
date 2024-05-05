import { getStaticImage } from '@/api/utils/image';
import ImageVue from '@/views/widget/image/Image.vue';
import Notepad from '@/views/widget/notepad/Notepad.vue';
import Video from '@/views/widget/video/Video.vue';
import { openWindow } from './window';

/* 打开记事本 */
export const openNotepad = (text: string) => {
  openWindow({
    title: '记事本',
    component: markRaw(Notepad),
    id: 'notepad',
    icon: getStaticImage('image-icon/notepad.png'),
    dark: true,
    data: text,
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

import avatarPng from '../assets/avatar.png';
import iconPng from '../assets/icon.png';
import wallpaperPng from '../assets/wallpaper.png';
import { galleryQuery, getGallery } from './data';
/*  */

interface GalleryNav {
  title: string;
  icon: string;
  type: 'wallpaper' | 'avatar' | 'sys-icon';
}
export const galleryKeys = ref<string[]>(['wallpaper']);
export const galleryNavList: GalleryNav[] = [
  {
    title: '壁纸',
    icon: wallpaperPng,
    type: 'wallpaper',
  },
  {
    title: '头像',
    icon: avatarPng,
    type: 'avatar',
  },
  {
    title: '图标',
    icon: iconPng,
    type: 'sys-icon',
  },
];

export const currentGalleryNav = ref<GalleryNav>(galleryNavList[0]);

export const selectGalleryNav = (item: GalleryNav) => {
  currentGalleryNav.value = item;
  galleryQuery.value.type = item.type;
  getGallery();
};

export const currentPhoto = ref({
  id: '',
  src: '',
});

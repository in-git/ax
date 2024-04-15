import avatarPng from '../assets/avatar.png';
import iconPng from '../assets/icon.png';
import wallpaperPng from '../assets/wallpaper.png';
/*  */
import WallpaperVue from '../body/wallpaper/Wallpaper.vue';

interface GalleryNav {
  title: string;
  icon: string;
  component: any;
  id: string;
  params: {
    size: string;
  };
}
export const galleryNavList: GalleryNav[] = [
  {
    title: '壁纸',
    icon: wallpaperPng,
    component: markRaw(WallpaperVue),
    id: 'wallpaper',

    params: {
      size: '1920,1080',
    },
  },
  {
    title: '头像',
    icon: avatarPng,
    component: markRaw(WallpaperVue),
    id: 'avatar',
    params: {
      size: '64,64',
    },
  },
  {
    title: '图标',
    icon: iconPng,
    component: markRaw(WallpaperVue),
    id: 'icon',
    params: {
      size: '32,32',
    },
  },
];

export const currentGalleryNav = ref<GalleryNav>(galleryNavList[0]);
export const selectGallery = (item: GalleryNav) => {
  currentGalleryNav.value = item;
};
export const currentPhoto = ref({
  id: '',
  src: '',
});

import avatarPng from '../assets/avatar.png';
import wallpaperPng from '../assets/wallpaper.png';
/*  */
import WallpaperVue from '../body/wallpaper/Wallpaper.vue';

interface GalleryNav {
  title: string;
  icon: string;
  component: any;
  id: string;
}
export const galleryNavList: GalleryNav[] = [
  {
    title: '壁纸',
    icon: wallpaperPng,
    component: markRaw(WallpaperVue),
    id: 'wallpaper',
  },
  {
    title: '头像',
    icon: avatarPng,
    component: markRaw(WallpaperVue),
    id: 'avatar',
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

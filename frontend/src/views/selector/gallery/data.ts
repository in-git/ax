/* 
	壁纸,头像,应用图标,用户图标
*/

interface GalleryConfig {
  show: boolean;
  category?: '';
  maximum?: number;
}
export const galleryConfig = ref<GalleryConfig>({
  show: false,
  category: '',
  maximum: 1,
});
export const setGallery = (config: GalleryConfig) => {
  galleryConfig.value = config;
};

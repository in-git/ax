export interface SystemGallery {
  galleryId: number;
  imageName: string;
  type: GalleryType;
  imageUrl: string;
  createTime: any;
  updateTime: any;
  storage: 'oss' | 'local';
}
export type GalleryType = 'sys-icon' | 'wallpaper' | 'avatar';

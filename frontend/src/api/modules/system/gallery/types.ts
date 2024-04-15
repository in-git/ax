export interface SystemGallery {
  galleryId: number;
  imageName: string;
  type: string;
  imageUrl: string;
  createTime: any;
  updateTime: any;
  storage: 'oss' | 'local';
}

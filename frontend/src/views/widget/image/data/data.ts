import { CircleStencil, RectangleStencil } from 'vue-advanced-cropper';
import type { CropperData } from './types';

export const cropperRef = ref();
export const cropperImage = ref('');
/* 裁剪后的结果 */
export const cropperResult = ref<CropperData>();

export const cropperProps = ref({
  zoom: false,
  stencilProps: {
    movable: true,
    resizable: true,
    // aspectRatio: 1,
  },
  stencil: 'rect',
});
export const downloadConfig = ref({
  /* 导出的名字 */
  exportName: 'AX',
  /* 压缩等级 */
  compress: 0.8,
  /* 格式化 */
  format: 'png',
});

export const stencilTypes: any = {
  rect: RectangleStencil,
  circle: CircleStencil,
};

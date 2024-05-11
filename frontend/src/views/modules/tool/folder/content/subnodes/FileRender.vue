<template>
  <a-flex :justify="'center'" class="file-render">
    <div class="flex flex-s">
      <a-image :src="getImageSource(type)" :preview="type === 'image'" :width="width" />
    </div>
  </a-flex>
</template>

<script setup lang="ts">
interface SystemFile {
  children: null;
  key: string;
  title: string;
  type?: string;
  isLeaf: boolean;
  src?: string;
  width: string;
}

import { getStaticImage } from '@/api/utils/image';
import logo from '@/assets/logo.png';
const props = defineProps<SystemFile>();

const getImageSource = (type?: string) => {
  // 定义type和对应的图片路径映射关系
  const imageMap: any = {
    image: props.src,
    folder: getStaticImage('image-icon/folder-sm.png'),
    text: getStaticImage('image-icon/file.png'),
    file: getStaticImage('image-icon/blank-file.png'),
    html: getStaticImage('image-icon/html.png'),
    css: getStaticImage('image-icon/css.png'),
  };
  if (!type) {
    return logo;
  }

  // 如果type不在映射中，则使用默认图片路径
  return imageMap[type] || getStaticImage('image-icon/file.png');
};
</script>

<style lang="scss" scoped></style>

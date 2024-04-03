<template>
  <div class="gallery-head">
    <div class="system-head px-12">
      <div>壁纸选择</div>
      <div class="system-icon" @click="close">
        <close-outlined />
      </div>
    </div>
    <div class="system-head px-12">
      <div>
        <a-button @click="getPhotos">刷新</a-button>
      </div>
      <div>
        <a-button type="primary" @click="use">使用</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { setBackground } from '@/store/page/utils';
import { useEventBus } from '@vueuse/core';
import { currentPhoto, getPhotos } from '../wallpaper/data';

const emit = useEventBus('gallery');
const close = () => {
  emit.emit('close');
};

const use = () => {
  setBackground({
    type: 'image',
    src: currentPhoto.value,
  });
};
</script>

<style lang="scss" scoped>
.gallery-head {
  line-height: 42px;
  background-color: #f2f3f3;
}
</style>

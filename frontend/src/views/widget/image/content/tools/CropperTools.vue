<template>
  <a-card class="cropper-tools" :bordered="false">
    <a-flex :align="'center'">
      <a-tooltip placement="top" v-for="item in options" :key="item.title" :title="item.title">
        <div class="system__icon" @click="item.action">
          <component :is="item.icon"></component>
        </div>
      </a-tooltip>

      <a-flex :align="'center'" class="info">
        <a-tag color="dark" class="mr-0">原图</a-tag>
        <a-tag color="dark" class="mr-0">
          {{ config.originalWidth }} x {{ config.originalHeight }}
        </a-tag>
        <a-tag color="dark">{{ bytesToSize(config.size) }}</a-tag>
      </a-flex>
      <div class="divider"></div>
      <a-flex :align="'center'" class="info">
        <a-tag color="dark" class="mr-0">裁剪后</a-tag>
        <a-tag color="dark" class="mr-0">{{ config.w }} x {{ config.h }}</a-tag>

        <a-tag color="var(--primary)" class="cursor-pointer" @click="calc">计算大小</a-tag>
        <a-tag v-if="config.calculateSize > 0" color="dark">
          WEBP / {{ bytesToSize(config.calculateSize) }}
        </a-tag>
      </a-flex>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { bytesToSize } from '@/utils/common/format';
import { RotateLeftOutlined, RotateRightOutlined } from '@ant-design/icons-vue';
import { cropperRef, cropperResult } from '../../data/data';

const config = ref({
  w: 0,
  h: 0,
  size: 0,
  /*  */
  originalWidth: 0,
  originalHeight: 0,
  calculateSize: 0,
});

const options = [
  {
    title: '右旋',
    icon: h(RotateRightOutlined),
    action() {
      nextTick(() => {
        if (cropperRef.value) {
          cropperRef.value.rotate(90);
        }
      });
    },
  },
  {
    title: '左旋',
    icon: h(RotateLeftOutlined),
    action() {
      nextTick(() => {
        if (cropperRef.value) {
          cropperRef.value.rotate(-90);
        }
      });
    },
  },
];

watch(
  cropperResult,
  () => {
    if (cropperResult.value) {
      config.value.w = cropperResult.value.coordinates.width;
      config.value.h = cropperResult.value.coordinates.height;
      config.value.size = cropperResult.value.image.src.length;

      const image = new Image();
      image.src = cropperResult.value.image.src;
      image.onload = () => {
        config.value.originalWidth = image.width;
        config.value.originalHeight = image.height;
      };
    }
  },
  {
    immediate: true,
    deep: true,
  },
);

const calc = () => {
  nextTick(async () => {
    if (cropperResult.value) {
      const { canvas } = cropperRef.value.getResult();
      const image = canvas.toDataURL(`image/webp`, 0.8);
      config.value.calculateSize = image.length;
    }
  });
};
</script>

<style lang="scss" scoped>
.cropper-tools {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 10;
  color: white;
  .info {
    color: #8a8a8a;
    border-radius: var(--radius);
    height: 32px;
  }
  .divider {
    width: 1px;
    height: 40%;
    background-color: #494949;
  }
}
</style>

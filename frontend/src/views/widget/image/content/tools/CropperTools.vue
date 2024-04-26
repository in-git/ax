<template>
  <a-card class="cropper-tools" :bordered="false">
    <a-flex :align="'center'">
      <a-tooltip placement="top" v-for="item in options" :key="item.title" :title="item.title">
        <div class="system__icon" @click="item.action">
          <component :is="item.icon"></component>
        </div>
      </a-tooltip>
      <a-tag color="dark">宽:{{ config.w }}px</a-tag>
      <a-tag color="dark">高:{{ config.h }}px</a-tag>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { RotateLeftOutlined, RotateRightOutlined } from '@ant-design/icons-vue';
import { cropperRef, cropperResult } from '../../data/data';

const config = ref({
  w: 0,
  h: 0,
  size: 0,
});
const options = [
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
];

watch(cropperResult, () => {
  if (cropperResult.value) {
    config.value.w = cropperResult.value.coordinates.width;
    config.value.h = cropperResult.value.coordinates.height;
  }
});
</script>

<style lang="scss" scoped>
.cropper-tools {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 10;
  color: white;
}
</style>

<template>
  <a-card class="gallery-body h-100" :body-style="{ paddingTop: '0' }">
    <GalleryHead />
    <template v-if="galleryType !== 'base64'">
      <template v-if="galleryData.length > 0">
        <div class="list">
          <div
            class="source-item"
            :bordered="false"
            v-for="(item, key) in galleryData"
            :key="item"
            @click="selectItem(item)"
            justify="center"
          >
            <div class="selected" v-if="currentGallery === item">
              <CheckOutlined />
            </div>
            <img
              :src="getStaticImage(item)"
              v-if="galleryType === 'image'"
              :alt="item"
              height="80"
            />
            <video
              muted
              controlslist="nodownload"
              v-else
              ref="videoRefs"
              @mouseenter="mouseenter(key)"
              @mouseleave="mouseleave(key)"
              :src="item"
              height="80"
            ></video>
          </div>
        </div>
      </template>

      <a-empty v-else></a-empty>
    </template>
    <template v-else>
      <a-card :body-style="{ position: 'relative' }">
        <a-upload-dragger
          @change="upload"
          :customRequest="() => false"
          :max-count="1"
          :file-list="fileList"
        >
          <div class="bg-image">
            <a-image :src="backgroundSrc"></a-image>
          </div>
          <div class="upload-info">
            <p class="ant-upload-drag-icon">
              <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">拖拽图片到此上传</p>
            <p class="ant-upload-hint">图片不限大小，但会占用计算机的存储空间</p>
          </div>
        </a-upload-dragger>
      </a-card>
    </template>
  </a-card>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import { LocalforageEnum } from '@/global/enum/localforage';
import usePageStore from '@/store/page';
import localforage from 'localforage';
import { currentGallery, galleryData, galleryType, setBase64Background } from './data/data';
import GalleryHead from './GalleryHead.vue';

const store = usePageStore();
const fileList = ref([]);
const comBackground = computed(() => {
  return store.$state.desktop.background;
});

const backgroundSrc = ref();
const videoRefs = ref<HTMLVideoElement[]>();

const selectItem = (item: string) => {
  currentGallery.value = item;
};

const mouseenter = (index: number) => {
  if (videoRefs.value) {
    videoRefs.value[index].play();
  }
};

const mouseleave = (index: number) => {
  if (videoRefs.value) {
    videoRefs.value[index].pause();
  }
};
const upload = async (config: any) => {
  setBase64Background(config.file.originFileObj);
};
onMounted(async () => {
  const data: any = await localforage.getItem(LocalforageEnum.BACKGROUND_SRC);
  backgroundSrc.value = data;
});
</script>

<style lang="scss" scoped>
@import './body.scss';
</style>

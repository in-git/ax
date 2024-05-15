<template>
  <a-card class="card__container" :bordered="false" :bodyStyle="{ padding: '0' }">
    <div class="system__head">
      <div>壁纸选择</div>
    </div>
    <div class="px-12 flex justify-between py-8">
      <div>
        <a-radio-group
          @change="changeGalleryType"
          v-model:value="galleryType"
          :options="typeOptions"
        ></a-radio-group>
        <a-button @click="upload">
          <template #icon>
            <UploadOutlined />
          </template>
          上传
        </a-button>
      </div>
      <div class="flex gc-4">
        <a-button size="small" type="primary" @click="use">使用</a-button>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import { setBackground } from '@/store/page/utils';
import { UploadOutlined } from '@ant-design/icons-vue';
import { useFileDialog } from '@vueuse/core';
import { changeGalleryType, currentGallery, galleryType, setBase64Background } from './data/data';

const { files, open, onChange, reset } = useFileDialog({
  accept: 'image/*',
  directory: false,
});

const use = () => {
  if (currentGallery.value) {
    setBackground(`${currentGallery.value}`, galleryType.value);
  }
};

const typeOptions = [
  {
    label: '图片',
    value: 'image',
  },
  {
    label: '视频',
    value: 'video',
  },
  {
    label: '本地',
    value: 'base64',
  },
];

const upload = async () => {
  open();
};

/**
 * @description: 用户上传自定义的图片
 */
onChange(async () => {
  if (!files.value) return;
  setBase64Background(files.value[0]);
  reset();
});

onMounted(() => {
  const pageStore = usePageStore();
  galleryType.value = pageStore.$state.desktop.background.type;
  changeGalleryType();
});
</script>

<style lang="scss" scoped>
.card__container {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>

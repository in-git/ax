<template>
  <a-flex class="upload-progress" :align="'center'" :gap="4">
    <a-flex class="px-4">
      <span>速率</span>
      <span class="text-000">{{ bytesToSize(uploadProgressConfig.rate) }}</span>
    </a-flex>
    <a-progress
      style="width: 80px"
      :percent="uploadProgressConfig.progress"
      :format="format"
      class="mb-0"
    ></a-progress>
    <span v-if="uploadCancelToken">
      <a-tooltip title="取消传输">
        <close-outlined class="icon-close" @click="cancel" />
      </a-tooltip>
    </span>
  </a-flex>
</template>

<script setup lang="ts">
import { bytesToSize } from '@/utils/common/format';
import { message } from 'ant-design-vue';
import { uploadCancelToken, uploadProgressConfig } from './data';

const format = (percent: number | undefined) => {
  return `${percent}%`;
};
const cancel = () => {
  if (uploadCancelToken.value) {
    uploadCancelToken.value.cancel('已取消');
    uploadProgressConfig.value.progress = 0;
    uploadProgressConfig.value.rate = 0;
    message.success('已取消');
    uploadCancelToken.value = null;
  }
};
</script>

<style lang="scss" scoped>
.upload-progress {
  width: fit-content;
  font-size: 12px;
}
.icon-close {
  color: #ff6262;
}
</style>

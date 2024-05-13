<template>
  <a-flex class="upload-progress" :align="'center'" :gap="4">
    <span v-if="uploadStatus === 'ready'">
      <a-badge dot status="default"></a-badge>
      准备就绪
    </span>
    <span v-else-if="uploadStatus === 'loading'">
      <loading-outlined spin />
      正在上传中....
      <a-tooltip title="取消">
        <close-outlined @click="cancel" />
      </a-tooltip>
    </span>
    <span v-else class="finished">
      <a-badge :status="'success'"></a-badge>
      已完成
    </span>
  </a-flex>
</template>

<script setup lang="ts">
import { uploadCancelToken, uploadStatus } from '../data/config';

const cancel = () => {
  if (uploadCancelToken.value) {
    uploadCancelToken.value.cancel();
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
.finished {
  color: #1f861f;
}
</style>

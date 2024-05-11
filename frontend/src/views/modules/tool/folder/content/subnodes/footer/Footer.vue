<template>
  <a-flex :justify="'space-between'" class="folder-footer">
    <div>文件大小</div>
    <div>
      <UploadProgress />
    </div>
  </a-flex>
</template>

<script setup lang="ts">
import UploadProgress from './UploadProgress.vue';
</script>

<style lang="scss" scoped>
.folder-footer {
  height: 28px;
  line-height: 28px;
  border-top: 1px solid #ddd;
  box-sizing: content-box;
  color: #999;
  padding: 0 8px;
  font-size: 12px;
}
</style>

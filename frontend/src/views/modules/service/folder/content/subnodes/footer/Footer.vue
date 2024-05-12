<template>
  <a-flex :justify="'space-between'" class="folder-footer">
    <div>
      <a-flex :align="'center'" v-if="fileInfo">
        <div class="flex">
          <div class="attr">
            <span>文件大小</span>
            <span>
              {{ fileInfo.size }}
            </span>
          </div>
        </div>
        <a-divider type="vertical"></a-divider>
        <div class="attr">
          <span>创建时间</span>
          <span>
            {{ useTimeAgo(fileInfo.createTime) }}
          </span>
        </div>
      </a-flex>
    </div>
    <div>
      <UploadProgress />
    </div>
  </a-flex>
</template>

<script setup lang="ts">
import { fileAttr } from '@/api/modules/file/file';
import type { FileAttr } from '@/api/modules/file/types';
import { EllipsisOutlined } from '@ant-design/icons-vue';
import { selectedFolders, fileInfo } from '../../../data/data';
import UploadProgress from './UploadProgress.vue';
import { useTimeAgo } from '@vueuse/core';
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

.attr {
  font-size: 12px;
  opacity: 0.9;
  & span:nth-child(1) {
    color: #999;
  }
  & span:nth-child(2) {
    color: #494949;
    font-weight: bold;
    margin-left: 4px;
  }
}
</style>

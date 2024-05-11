<template>
  <a-flex :justify="'space-between'" class="folder-footer">
    <div>
      <a-popover trigger="click" placement="topLeft">
        <a-button type="text" @click="getInfo">
          <span class="text-12">
            属性
            <EllipsisOutlined />
          </span>
        </a-button>
        <template #content>
          <a-card style="width: 400px">
            <a-descriptions title="文件(夹)信息" :column="1" :size="'small'">
              <a-descriptions-item
                v-for="(value, key) in fileInfo"
                :key="key"
                :label="fileAttrDescription[key]"
              >
                {{ value }}
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </template>
      </a-popover>
    </div>
    <div>
      <UploadProgress />
    </div>
  </a-flex>
</template>

<script setup lang="ts">
import { fileAttr } from '@/api/modules/tool/file/file';
import type { FileAttr } from '@/api/modules/tool/file/types';
import { EllipsisOutlined } from '@ant-design/icons-vue';
import { selectedFolders } from '../../../data/data';
import UploadProgress from './UploadProgress.vue';

const fileInfo = ref<FileAttr>();
const fileAttrDescription: Record<string, string> = {
  name: '文件名',
  absolutePath: '文件路径',
  size: '文件大小',
  readable: '可读',
  writable: '可写',
  directory: '是否目录',
  hidden: '是否隐藏',
  lastModified: '最后修改时间',
  createTime: '创建时间',
  totalSpace: '分区的总大小',
  usableSpace: '分区可用大小',
};

const getInfo = async () => {
  const path = selectedFolders.value[0];
  if (selectedFolders.value.length === 1) {
    console.log(path);

    const { data } = await fileAttr(`${path}`);
    fileInfo.value = data.data;
  }
};
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

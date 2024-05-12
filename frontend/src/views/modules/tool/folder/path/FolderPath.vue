<template>
  <div class="folder-path">
    <a-card :bordered="false" :body-style="{ padding: '0' }" class="sticky-top">
      <a-flex class="folder-head system__subtitle" :justify="'space-between'" :align="'center'">
        <div>文件夹列表</div>
        <a-tooltip title="刷新">
          <reload-outlined @click="getData" />
        </a-tooltip>
      </a-flex>
    </a-card>
    <a-directory-tree
      @select="selectPath"
      :tree-data="treeData"
      v-model:selected-keys="selectedPaths"
      :load-data="onLoadData"
    ></a-directory-tree>
  </div>
</template>

<script setup lang="ts">
import { getSystemPath } from '@/api/modules/file/file';
import { FileOutlined, FolderOutlined } from '@ant-design/icons-vue';
import type { TreeProps } from 'ant-design-vue';
import type { DataNode, EventDataNode } from 'ant-design-vue/es/tree';
import type { Key } from 'ant-design-vue/es/vc-tree-select/interface';
import {
  currentFolder,
  currentPath,
  folderLoading,
  selectedFolders,
  selectedPaths,
} from '../data/data';

const treeData = ref<DataNode[]>([]);
const emit = defineEmits(['update:modelValue']);

const getData = async () => {
  const { data } = await getSystemPath('');

  if (data.data) {
    treeData.value = data.data.map(e => {
      if (e.type === 'folder') {
        e.icon = h(FolderOutlined);
      } else {
        e.icon = h(FileOutlined);
      }
      return e;
    });
  }
};

const onLoadData: TreeProps['loadData'] = (treeNode: EventDataNode) => {
  folderLoading.value = true;
  selectedFolders.value = [];
  return new Promise<void>(async resolve => {
    if (!treeNode.dataRef) return;
    const { data } = await getSystemPath(`${treeNode.key}`);
    currentFolder.value = data.data;
    treeNode.dataRef.children = data.data?.filter(e => {
      if (e.type === 'folder') return e;
    });
    treeData.value = [...treeData.value];
    folderLoading.value = false;
    resolve();
  });
};

const selectPath = (selectedKeys: Key[], info: any) => {
  const path = selectedKeys[0];
  selectedFolders.value = [];
  if (path) {
    currentPath.value = `${path}`;
    onLoadData(info.node);
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.folder-path {
  height: calc(100%);
  overflow-y: auto;
  overflow-x: hidden;
}
:deep(.ant-tree-treenode) {
  white-space: nowrap;
}
.folder-head {
  height: 32px;
  line-height: 32px;
  padding: 0 8px;
  border-bottom: 1px solid #ddd;
}
.sticky-top {
  position: sticky;
  z-index: 100;
  box-shadow: none;
  top: 0;
}
</style>

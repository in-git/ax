<template>
  <div class="system-path">
    <a-card title="文件夹">
      <template #extra>
        <a-flex :gap="8">
          <a-button @click="refresh">
            <reload-outlined />
          </a-button>
          <a-button type="primary" @click="confirm">确定</a-button>
        </a-flex>
      </template>
      <a-directory-tree
        @select="selectPath"
        :multiple="multiple"
        :tree-data="treeData"
        :height="374"
        v-model:selected-keys="selectedKeys"
        :load-data="onLoadData"
      ></a-directory-tree>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { getSystemPath } from '@/api/modules/file/file';
import { FileOutlined, FolderOutlined } from '@ant-design/icons-vue';
import type { TreeProps } from 'ant-design-vue';
import type { DataNode, EventDataNode } from 'ant-design-vue/es/tree';
import type { Key } from 'ant-design-vue/es/vc-tree-select/interface';

const treeData = ref<DataNode[]>([]);
const emit = defineEmits(['update:modelValue']);
const props = withDefaults(
  defineProps<{
    /* 是否多选 */
    multiple?: boolean;
    /* 双向绑定路径 */
    modelValue: string[] | undefined;
    /* 从root路径开始查询 */
    root?: string;
    /* 仅查询文件夹 */
    onlyFolder: boolean;
  }>(),
  {
    multiple: false,
    root: '',
    onlyFolder: true,
  },
);

const selectedKeys = ref();
const getPath = async (path: string) => {
  const { data } = await getSystemPath(path, props.onlyFolder);
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
  return new Promise<void>(async resolve => {
    if (!treeNode.dataRef) return;
    const { data } = await getSystemPath(`${treeNode.key}`, props.onlyFolder);

    treeNode.dataRef.children = data.data;
    treeData.value = [...treeData.value];
    resolve();
  });
};

const selectPath = (selectedKeys: Key[], info: any) => {
  const path = selectedKeys[0];
  if (path) {
    onLoadData(info.node);
  }
};

const refresh = () => {
  treeData.value = [];
  getPath('');
};
onMounted(() => {
  getPath(props.root);
});

const confirm = () => {
  emit('update:modelValue', selectedKeys.value);
};
</script>

<style lang="scss" scoped>
.system-path {
  min-height: 200px;
  width: 380px;
  :deep(.ant-card-body) {
    height: 400px;
    overflow-y: auto;
  }
}
:deep(.ant-tree-treenode) {
  white-space: nowrap;
}
</style>

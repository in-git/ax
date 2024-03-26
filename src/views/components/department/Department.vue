<template>
  <div>
    <a-input-search
      allow-clear
      v-model:value="keyword"
      placeholder="Please enter department name"
      @search="search"
    ></a-input-search>
    <a-directory-tree
      class="mt-8"
      :tree-data="treeData"
      selectable
      v-model:expanded-keys="fullPath"
      v-model:selected-keys="selectedKeys"
      blockNode
      :default-expand-all="true"
      :fieldNames="{ children: 'children', title: 'label', key: 'id' }"
      @select="onSelect"
    ></a-directory-tree>
  </div>
</template>

<script setup lang="ts">
import type { Key } from 'ant-design-vue/es/_util/type';
import { deptTreeData, findInTree, getFullPath, loadDeptTree } from './data';

const fullPath = ref<number[]>([]);
const treeData = ref();
const keyword = ref<string>('');
const selectedKeys = ref<number[]>([]);

const emit = defineEmits(['search', 'select']);

const props = defineProps<{
  id: number;
}>();
const search = () => {
  let result = findInTree(keyword.value, deptTreeData.value) || [];
  treeData.value = result;
  emit('search', result);
};

const onSelect = (keys: Key[]) => {
  emit('select', keys);
};
onMounted(() => {
  selectedKeys.value = [props.id];
});
watch(
  deptTreeData,
  async () => {
    if (deptTreeData.value.length === 0) {
      await loadDeptTree();
    }

    treeData.value = deptTreeData.value;
    fullPath.value = getFullPath(props.id, deptTreeData.value) || [];
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>

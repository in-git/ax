<template>
  <div>
    <a-tree-select
      :tree-data="deptTreeData"
      @change="onSelect"
      placeholder="部门筛选"
      selectable
      :checkable="false"
      v-model:expanded-keys="fullPath"
      v-model:selected-keys="selectedKeys"
      :default-expand-all="true"
      :fieldNames="{ value: 'id' }"
      style="width: 200px"
      allow-clear
    ></a-tree-select>
  </div>
</template>

<script setup lang="ts">
const fullPath = ref<number[]>([]);
const treeData = ref();
const selectedKeys = ref<number[]>([]);
import { loadDeptTree, userList } from '../../../data/curd';
import { deptTreeData, userQuery } from '../../../data/table';

const onSelect = (key: number) => {
  userQuery.value.deptId = key;
  selectedKeys.value = [key];
  userList();
};

watch(
  deptTreeData,
  async () => {
    if (deptTreeData.value.length === 0) {
      await loadDeptTree();
    }
    treeData.value = deptTreeData.value;
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>

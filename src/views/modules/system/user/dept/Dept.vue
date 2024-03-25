<template>
  <div class="dept p-8">
    <h3 class="text-16 text-bold mb-8">用户部门</h3>
    <a-input></a-input>
    <a-tree
      class="mt-8"
      :tree-data="treeData"
      selectable
      showLine
      v-model:expanded-keys="fullPath"
      v-model:selected-keys="selectedKeys"
      blockNode
      :default-expand-all="true"
      :fieldNames="{ children: 'children', title: 'label', key: 'id' }"
      @select="onSelect"
    ></a-tree>
  </div>
</template>

<script setup lang="ts">
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { userForm } from '../form/data';
import { loadUserData, userQuery } from '../table/data';
import { deptTreeData, getFullPath, loadDeptTree } from './data';

const fullPath = ref<number[]>([]);
const selectedKeys = ref<number[]>([]);
const loading = ref(false);
const treeData: any = deptTreeData;

onMounted(async () => {
  loading.value = true;
  await loadDeptTree();
  loading.value = false;
});
const onSelect = (keys: Key[]) => {
  console.log(keys);
  userQuery.value.deptId = Number(keys[0]);
  loadUserData();
};
watch(
  deptTreeData,
  () => {
    fullPath.value = getFullPath(userForm.value.deptId, deptTreeData.value) || [];
    selectedKeys.value = [userForm.value.deptId];
    console.log(userForm.value.deptId);
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.dept {
  width: 200px;
  background: #f8f8f8;
  border-right: 1px solid #ddd;
}
</style>

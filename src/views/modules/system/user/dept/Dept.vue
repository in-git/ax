<template>
  <div class="dept p-8">
    <h3 class="text-16 text-bold mb-8">Department</h3>
    <Department @select="select" :id="userForm.deptId" />
  </div>
</template>

<script setup lang="ts">
import Department from '@/views/components/department/Department.vue';
import { useCloned } from '@vueuse/core';
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { userForm } from '../form/data';
import { loadUserData, userQuery } from '../table/data';
import { deptTreeData, getFullPath } from './data';

const fullPath = ref<number[]>([]);
const selectedKeys = ref<number[]>([]);

const treeData = ref();

const select = (keys: Key[]) => {
  console.log(keys);

  userQuery.value.deptId = Number(keys[0]);
  loadUserData();
};

watch(
  deptTreeData,
  () => {
    fullPath.value = getFullPath(userForm.value.deptId, deptTreeData.value) || [];
    selectedKeys.value = [userForm.value.deptId];
    treeData.value = useCloned(deptTreeData.value).cloned.value;
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

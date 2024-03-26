<template>
  <div class="dept p-8">
    <h3 class="text-16 text-bold mb-8">Department</h3>
    <Department allow-select @select="select" :id="userForm.deptId" />
  </div>
</template>

<script setup lang="ts">
import Department from '@/views/components/department/Department.vue';
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { userForm } from '../form/data';
import { loadUserData, userQuery } from '../table/data';

const fullPath = ref<number[]>([]);
const selectedKeys = ref<number[]>([]);

const treeData = ref();

const select = (keys: Key[]) => {
  userQuery.value.deptId = Number(keys[0]);
  loadUserData();
};
</script>

<style lang="scss" scoped>
.dept {
  width: 200px;
  background: #f8f8f8;
  border-right: 1px solid #ddd;
}
</style>

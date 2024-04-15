<template>
  <a-card class="dept">
    <h3>用户部门</h3>
    <a-input-search
      allow-clear
      v-model:value="keyword"
      placeholder="请输入部门名称"
      @search="search"
    ></a-input-search>
    <a-directory-tree
      class="mt-8"
      :tree-data="treeData"
      @select="onSelect"
      selectable
      :checkable="false"
      v-model:expanded-keys="fullPath"
      v-model:selected-keys="selectedKeys"
      blockNode
      :default-expand-all="true"
      :fieldNames="{ title: 'label', key: 'id' }"
    ></a-directory-tree>
  </a-card>
</template>

<script setup lang="ts">
import type { Key } from 'ant-design-vue/es/_util/type';
import { loadUserData } from '../data/curd';
import { userQuery } from '../data/data';
import { deptTreeData, findInTree, loadDeptTree } from './data';

const fullPath = ref<number[]>([]);
const treeData = ref();
const keyword = ref<string>('');
const selectedKeys = ref<number[]>([]);

const search = () => {
  let result = findInTree(keyword.value, deptTreeData.value) || [];
  treeData.value = result;
};
const onSelect = (keys: Key[]) => {
  userQuery.value.deptId = Number(keys[0]);
  loadUserData();
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

<style lang="scss" scoped>
.dept {
  flex-basis: 200px;
  padding: 12px;
  h3 {
    margin-bottom: 12px;
  }
}
</style>

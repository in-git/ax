<template>
  <div class="dept p-8">
    <h3 class="text-16 text-bold mb-8">用户部门</h3>
    <a-input></a-input>
    <a-tree
      class="mt-8"
      :tree-data="treeData"
      selectable
      showLine
      blockNode
      :defaultExpandAll="true"
      :fieldNames="{ children: 'children', title: 'label', key: 'id' }"
    ></a-tree>
  </div>
</template>

<script setup lang="ts">
import { deptTreeData, loadDeptTree } from './data';

const loading = ref(false);
const treeData: any = deptTreeData;
onMounted(async () => {
  loading.value = true;
  await loadDeptTree();
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.dept {
  width: 200px;
  background: #f8f8f8;
  border-right: 1px solid #ddd;
}
</style>

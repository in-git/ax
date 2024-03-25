<template>
  <div>
    <a-card v-if="!!currentRole">
      <a-tree
        multiple
        :tree-data="treeData"
        :field-names="{
          key: 'id',
          title: 'label',
        }"
        checkable
        default-expand-all
        v-model:checked-keys="currentRole.deptIds"
      ></a-tree>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { currentRole, roleData } from '../../card/data';

const treeData = ref<any>();

watch(
  roleData,
  () => {
    treeData.value = roleData.value.deptList;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>

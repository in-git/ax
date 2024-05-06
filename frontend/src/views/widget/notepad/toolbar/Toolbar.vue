<template>
  <a-card>
    <a-flex :align="'center'">
      <FileVue />
      <List />
      <Tool />
      <slot></slot>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import FileVue from './file/File.vue';
import List from './list/List.vue';
import Tool from './tool/Tool.vue';
</script>

<style lang="scss" scoped>
.toolbar {
  justify-content: space-between;
  align-items: center;
}
:deep(.ant-card-body) {
  padding: 0;
}
</style>

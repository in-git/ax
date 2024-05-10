<template>
  <a-flex class="folder-head" :justify="'space-between'" :align="'center'">
    <a-flex :align="'center'" :gap="8">
      <a-button type="text" @click="goBack">
        <LeftOutlined class="text-12" />
      </a-button>
      <a-breadcrumb separator=">" v-if="!isActive" @dblclick="isActive = !isActive">
        <a-breadcrumb-item
          class="cursor-pointer"
          @click="selectPath(item, key)"
          v-for="(item, key) in currentPath.split('\\')"
        >
          {{ item }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <input
        v-input-select
        v-model="currentPath"
        style="width: 400px"
        @blur="isActive = !isActive"
        v-else
      />
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
import type { LeftOutlined } from '@ant-design/icons-vue';
import { loadPath } from '../data/action';
import { currentPath } from '../data/data';

/* 激活：input，未激活：面包屑导航 */
const isActive = ref(false);

function getParentPath(currentPath: string): string {
  const parts = currentPath.split('\\'); // 使用 '\\' 来拆分路径
  if (parts.length <= 1) {
    return '';
  }
  return parts.slice(0, -1).join('\\');
}
const goBack = () => {
  currentPath.value = getParentPath(currentPath.value);
  loadPath();
};
const selectPath = (_: string, key: number) => {
  const selectedPath = currentPath.value
    .split('\\')
    .slice(0, key + 1)
    .join('\\');
  console.log(selectedPath);

  if (selectedPath) {
    currentPath.value = `${selectedPath}`;
    loadPath();
  }
};
</script>

<style lang="scss" scoped>
.folder-head {
  height: 30px;
  line-height: 30px;
  box-sizing: content-box;
  border-bottom: 1px solid #ddd;
  padding: 0 8px;
}
input {
  line-height: 20px;
  border: 1px solid #ddd;
  outline: none;
  padding: 0 4px;
}
</style>

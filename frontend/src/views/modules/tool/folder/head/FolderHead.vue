<template>
  <a-flex class="folder-head" :justify="'space-between'" :align="'center'">
    <a-flex :align="'center'" :gap="8" v-if="currentPath">
      <a-button type="text" @click="goBack">
        <LeftOutlined class="text-12" />
      </a-button>
      <a-breadcrumb separator=">" v-if="!isActive">
        <a-breadcrumb-item
          class="cursor-pointer"
          @click.stop="selectPath(key)"
          v-for="(item, key) in path"
        >
          {{ item }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <input
        v-input-select
        v-model="currentPath"
        style="width: 400px"
        @blur="isActive = !isActive"
        @keydown.enter="search"
        v-else
      />
      <a-button type="text" @click="isActive = !isActive">
        <EditOutlined v-if="!isActive" />
        <CheckOutlined v-else />
      </a-button>
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
import type { LeftOutlined } from '@ant-design/icons-vue';
import { getSeparator, loadPath } from '../data/action';
import { currentPath } from '../data/data';

/* 激活：input，未激活：面包屑导航 */
const isActive = ref(false);

const getParentPath = (currentPath: string): string => {
  const parts = currentPath.split(getSeparator());
  if (parts.length <= 1) {
    return '';
  }
  return parts.slice(0, -1).join(getSeparator());
};

/**
 * @description: 返回上一层
 */
const goBack = () => {
  currentPath.value = getParentPath(currentPath.value);
  loadPath();
};

/**
 * @description: 选择面包屑上的路径，不同操作系统，路径不同，索引也不同
 * @param {*} index 索引
 */
const selectPath = (index: number) => {
  const pathParts = currentPath.value.split(getSeparator()).filter(e => e);

  if (index < 0 || index >= pathParts.length) {
    return;
  }
  // 选择路径的一部分并更新当前路径状态
  const selectedPath = pathParts.slice(0, index + 1).join(getSeparator());
  if (selectedPath) {
    currentPath.value = selectedPath;

    loadPath();
  }
};

const search = () => {
  isActive.value = false;
  loadPath();
};

const path = computed(() => {
  return currentPath.value.split(getSeparator()).filter(e => e);
});
</script>

<style lang="scss" scoped>
.folder-head {
  height: 32px;
  line-height: 32px;
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

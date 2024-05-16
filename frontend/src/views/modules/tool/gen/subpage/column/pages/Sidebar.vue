<template>
  <div class="sidebar">
    <div class="sidebar-head">流程</div>
    <a-steps direction="vertical" :current="currentStep.key" :items="items" class="px-12"></a-steps>
  </div>
</template>

<script setup lang="ts">
import { currentStep } from '../data/config';

const items = [
  {
    title: '基础配置',
    description: '配置基础信息',
    disabled: true,
  },
  {
    title: '字段配置',
    description: '对字段进行配置',
    disabled: true,
  },
  {
    title: '代码配置',
    description: '配置生成的代码',
    disabled: true,
  },
];
</script>

<style lang="scss" scoped>
.sidebar {
  border-right: 1px solid #ddd;
  height: 100%;
  min-width: 200px;
  .sidebar-head {
    border-bottom: 1px solid #ddd;
    line-height: 36px;
    margin-bottom: 12px;
    padding: 0 12px;
  }
}
</style>

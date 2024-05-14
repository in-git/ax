<template>
  <div class="sidebar pr-12">
    <div class="mb-12">流程说明</div>
    <a-steps
      @change="onChange"
      direction="vertical"
      v-model:current="currentStep.key"
      :items="items"
    ></a-steps>
  </div>
</template>

<script setup lang="ts">
import { currentStep, genStepList } from '../data/config';

const items = [
  {
    title: '基础配置',
    description: '配置基础信息',
  },
  {
    title: '字段配置',
    description: '对每个字段进行配置',
  },
  {
    title: '后端配置',
    description: '后端打包配置',
  },
];

const onChange = (current: number) => {
  currentStep.value = genStepList[current];
};
</script>

<style lang="scss" scoped>
.sidebar {
  border-right: 1px solid #ddd;
  height: 100%;
}
</style>

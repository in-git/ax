<template>
  <div class="content-head flex justify-between align-center">
    <div class="flex gc-4 align-center">
      <!-- <a-select
        v-model:value="AIStore.$state.qianFan.model"
        style="width: 160px"
        :options="modelList"
      ></a-select> -->
      <a-breadcrumb>
        <a-breadcrumb-item>会话列表</a-breadcrumb-item>
        <a-breadcrumb-item>
          {{ conversation.title || 'empty' }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAIStore from '@/store/AI/AI';
import { conversation } from '../../sidebar/sidebar';

const modelList = [
  {
    label: '',
    value: '',
  },
];

const AIStore = useAIStore();
</script>

<style lang="scss" scoped>
.content-head {
  line-height: 32px;
  padding: 0 8px;
  height: 32px;
  border-bottom: 1px solid #ddd;

  .system__icon {
    width: 24px;
    height: 24px;
    &:hover {
      background: #e7e7e7;
    }
  }
}
</style>

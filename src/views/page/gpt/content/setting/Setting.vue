<template>
  <div class="settings" v-draggable>
    <div class="setting-head system-head px-8" data-drag>
      <div>设置中心</div>
      <div class="system-icon" @click="showSetting = false">
        <CloseOutlined />
      </div>
    </div>

    <div class="p-8 components">
      <a-segmented v-model:value="current" :options="data"></a-segmented>
      <div class="mt-8">
        <GptVue v-if="current === 'gpt'" />
        <AdvanceVue v-else-if="current === 'advance'" />
        <Developer v-else-if="current === 'developer'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SegmentedOption } from 'ant-design-vue/es/segmented/src/segmented';
import AdvanceVue from './advance/Advance.vue';
import Developer from './developer/Developer.vue';
import GptVue from './gpt/Gpt.vue';
import { showSetting } from './setting';

const data: SegmentedOption[] = [
  {
    title: 'Gpt设置',
    label: 'Gpt设置',
    value: 'gpt',
  },
  {
    label: '高级设置',
    title: '高级设置',
    value: 'advance',
  },
  {
    label: '开发者中心',
    title: '开发者中心',
    value: 'developer',
  },
];

const current = ref<'gpt' | 'advance'>('gpt');
</script>

<style lang="scss" scoped>
.settings {
  position: fixed;
  width: 600px;
  height: 450px;
  background: white;
  top: calc(50% - 220px);
  box-shadow: var(--window-shadow);
  left: calc(50% - 300px);
  border: 1px solid #ddd;
  border-radius: var(--radius);
  .setting-head {
    border-bottom: 1px solid #ddd;
  }
  .system-icon {
    &:hover {
      background: #eee;
    }
  }
  .components {
    height: calc(100% - 42px);
    overflow-y: auto;
  }
}
</style>

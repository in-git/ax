<template>
  <div class="settings">
    <div class="setting-head system-head px-8" data-drag>
      <div>设置中心</div>
      <div class="system-icon" @click="showSetting = false">
        <CloseOutlined />
      </div>
    </div>

    <div class="p-8 components">
      <a-segmented v-model:value="current" :options="gptNavOptions"></a-segmented>
      <div class="mt-8">
        <GptVue v-if="current === 'gpt'" />
        <Developer v-else="current === 'developer'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Developer from './developer/Developer.vue';
import GptVue from './gpt/Gpt.vue';
import { gptNavOptions, showSetting } from './setting';

const current = ref<'gpt' | 'advance'>('gpt');
</script>

<style lang="scss" scoped>
.settings {
  position: fixed;
  width: 600px;
  height: 450px;
  background: white;
  z-index: 10;
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

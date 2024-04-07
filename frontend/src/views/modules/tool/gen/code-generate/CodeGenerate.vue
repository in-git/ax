<template>
  <SystemModal title="AI代码生成" v-model:visible="openAiGen">
    <div class="code-generate">
      <a-button type="primary" @click="test">Test</a-button>
    </div>
  </SystemModal>
</template>

<script setup lang="ts">
import { aiGen } from '@/api/node/system/gen';
import SystemModal from '@/components/modal/SysModal.vue';
import { openAiGen } from '../data/form';

const test = async () => {
  const { data } = await aiGen();
  console.log(data);
};
</script>

<style lang="scss" scoped></style>

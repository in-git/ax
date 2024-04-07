<template>
  <SystemModal title="AI代码生成" v-model:visible="openAiGen">
    <div class="code-generate"></div>
  </SystemModal>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { openAiGen } from './data';
</script>

<style lang="scss" scoped></style>

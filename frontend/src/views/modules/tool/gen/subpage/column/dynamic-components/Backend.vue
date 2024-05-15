<template>
  <div>
    <div class="field-head">
      {{ currentStep.title }}
    </div>
    <a-card bordered></a-card>
  </div>
</template>

<script setup lang="ts">
import { currentStep } from '../data/config';
</script>

<style lang="scss" scoped>
.field-head {
  line-height: 36px;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
}
:deep(.ant-card-body) {
  box-shadow: none;
}
</style>

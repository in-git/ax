<template>
  <div>
    <a-card :title="currentStep.title"></a-card>
  </div>
</template>

<script setup lang="ts">
import { currentStep } from '../data/config';
</script>

<style lang="scss" scoped></style>

<template>
  <div class="page-container px-8">
    <a-page-header :title="title" class="px-0 py-8" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.page-container {
  height: 100%;
  background: #f1f0f5;
  overflow-y: auto;
}
</style>

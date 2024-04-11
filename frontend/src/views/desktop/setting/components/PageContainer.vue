<template>
  <div class="page-container px-8">
    <div class="py-12 text-18">{{ title }}</div>
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
  background: #f2f2f2;
  overflow-y: auto;
}
</style>

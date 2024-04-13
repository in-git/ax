<template>
  <div class="px-8">
    <a-card :title="title" class="w-100">
      <slot></slot>
    </a-card>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.page-container {
  overflow-y: auto;
}
</style>

<template>
  <div class="pl-8">
    <a-card :title="title">
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
  height: 100% !important;
}
</style>

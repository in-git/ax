<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">{{ title }}</h3>
    </template>
    <a-flex justify="space-between" :align="'center'">
      <slot></slot>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.ax_sticky_top {
  position: sticky !important;
  top: 0px;
  z-index: 10;
  margin-bottom: 8px;
}
</style>

<template>
  <a-card class="table__head">
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
.table__head {
  position: sticky !important;
  top: 0px;
  z-index: 10;
}
</style>

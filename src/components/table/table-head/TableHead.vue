<template>
  <div class="table__head py-8 px-12">
    <h3 class="text-16 text-bold mb-12">{{ title }}</h3>
    <div class="flex justify-between align-center">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.table__head {
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}
</style>

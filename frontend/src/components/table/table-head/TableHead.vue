<template>
  <div class="table__head py-8 px-12">
    <h3 class="text-14 mb-12">{{ title }}</h3>
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
  padding-bottom: 8px;
  box-shadow: 0 0 15px #cfcfcf9a;
  position: sticky;
  top: 0px;
  z-index: 10;
  background: white;
}
</style>

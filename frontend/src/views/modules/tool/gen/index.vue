<template>
  <a-card :body-style="{ overflowY: 'hidden' }" class="system__template">
    <TableHeadVue />
    <TableVue />
  </a-card>
</template>

<script setup lang="ts">
import TableHeadVue from './table/head.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped>
.system__module {
  overflow: hidden;
}
</style>

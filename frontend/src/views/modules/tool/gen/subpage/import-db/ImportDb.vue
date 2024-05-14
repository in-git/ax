<template>
  <a-card :body-style="{ overflowY: 'hidden' }" class="system__module">
    <AXHead />
    <TableVue></TableVue>
  </a-card>
</template>

<script setup lang="ts">
import { dbList } from './data/curd';
import AXHead from './pages/AXHead.vue';
import TableVue from './pages/Table.vue';

onMounted(() => {
  dbList();
});
</script>

<style lang="scss" scoped></style>

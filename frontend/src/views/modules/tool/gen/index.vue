<template>
  <a-card :body-style="{ overflowY: 'hidden' }" class="system__module">
    <TableVue />
  </a-card>
</template>

<script setup lang="ts">
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped>
.system__module {
  overflow: hidden;
}
</style>

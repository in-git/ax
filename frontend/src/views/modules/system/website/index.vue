<template>
  <div class="system-module">
    <TableVue v-if="viewMode === 'table'"></TableVue>
    <CardVue v-else></CardVue>
    <FormVue></FormVue>
  </div>
</template>

<script setup lang="ts">
import CardVue from './card/Card.vue';
import { viewMode } from './data/table';
import FormVue from './form/form.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped></style>

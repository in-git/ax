<template>
  <a-card class="system__template" :body-style="{ height: '100%' }">
    <TableVue></TableVue>
    <FormVue></FormVue>
  </a-card>
</template>

<script setup lang="ts">
import FormVue from './form/form.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped></style>

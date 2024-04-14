<template>
  <a-card class="system__module">
    <TableVue />
    <FormVue />
    <DbVue></DbVue>
  </a-card>
</template>

<script setup lang="ts">
import DbVue from './db/db.vue';
import FormVue from './form/form.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped></style>

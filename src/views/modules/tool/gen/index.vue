<template>
  <div class="system-module">
    <TableVue />
    <FormVue />
    <DbVue></DbVue>
  </div>
</template>

<script setup lang="ts">
import DbVue from './db/db.vue';
import FormVue from './form/form.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped></style>

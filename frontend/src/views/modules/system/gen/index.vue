<template>
  <a-card :body-style="{ overflowY: 'hidden' }" class="system__module">
    <TableVue />
    <FormVue />
    <DbVue />
    <!--  -->
  </a-card>
</template>

<script setup lang="ts">
import DbVue from './db/db.vue';
import FormVue from './form/form.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped>
.system__module {
  overflow: hidden;
}
</style>

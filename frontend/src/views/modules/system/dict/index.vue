<template>
  <a-card class="system__template" :body-style="{ height: '100%', overflowY: 'auto' }">
    <Animation>
      <TableVue v-if="!editDictConfig"></TableVue>
      <DictData v-else-if="editDictConfig"></DictData>
    </Animation>

    <FormVue></FormVue>
  </a-card>
</template>

<script setup lang="ts">
import { editDictConfig } from './data/form';
import DictData from './dict-data/DictData.vue';
import FormVue from './form/form.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped></style>

<template>
  <a-card class="system__module menu" :body-style="{ padding: '0' }">
    <MenuTable></MenuTable>
    <MenuForm></MenuForm>
  </a-card>
</template>

<script setup lang="ts">
import MenuForm from './form/MenuForm.vue';

import MenuTable from './table/MenuTable.vue';
</script>

<style lang="scss" scoped></style>

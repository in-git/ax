<template>
  <a-card class="system__module">
    <MenuTable></MenuTable>
    <Animation>
      <MenuForm v-if="showMenuForm"></MenuForm>
    </Animation>
  </a-card>
</template>

<script setup lang="ts">
import { showMenuForm } from './data/form';
import MenuForm from './form/MenuForm.vue';

import MenuTable from './table/MenuTable.vue';
</script>

<style lang="scss" scoped></style>

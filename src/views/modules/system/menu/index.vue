<template>
  <div class="system-module">
    <template v-if="!editMenu">
      <MenuTable></MenuTable>
    </template>
    <MenuForm v-else></MenuForm>
  </div>
</template>

<script setup lang="ts">
import { editMenu } from './form/data';
import MenuForm from './form/MenuForm.vue';

import MenuTable from './table/MenuTable.vue';
</script>

<style lang="scss" scoped></style>

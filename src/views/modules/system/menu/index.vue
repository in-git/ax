<template>
  <div class="system-module">
    <MenuTable></MenuTable>
    <Transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <MenuForm v-if="showMenuForm"></MenuForm>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { showMenuForm } from './form/data';
import MenuForm from './form/MenuForm.vue';

import MenuTable from './table/MenuTable.vue';
</script>

<style lang="scss" scoped></style>

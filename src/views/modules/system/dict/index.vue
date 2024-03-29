<template>
  <div class="system-module">
    <Transition
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__zoomOutRight"
    >
      <TableVue v-if="!editDictConfig"></TableVue>
    </Transition>
    <Transition
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__zoomOutRight"
    >
      <DictData v-if="editDictConfig"></DictData>
    </Transition>

    <FormVue></FormVue>
  </div>
</template>

<script setup lang="ts">
import { editDictConfig } from './data/form';
import DictData from './dict-data/DictData.vue';
import FormVue from './form/form.vue';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped></style>

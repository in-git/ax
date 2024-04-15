<template>
  <a-card class="system__template" :body-style="{ height: '100%' }">
    <Transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <TableVue v-if="!editDictConfig"></TableVue>
    </Transition>
    <Transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <DictData v-if="editDictConfig"></DictData>
    </Transition>

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

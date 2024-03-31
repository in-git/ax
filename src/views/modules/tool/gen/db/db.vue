<template>
  <SystemModal title="导入表" v-model:visible="showDbForm">
    <div class="h-100 flex flex-col">
      <TableVue></TableVue>
      <FormFooter position="right">
        <a-button type="primary" @click="importDb()">导入</a-button>
      </FormFooter>
    </div>
  </SystemModal>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { showDbForm } from '../data/form';
import { importDb } from './data/curd';
import TableVue from './table/table.vue';
</script>

<style lang="scss" scoped></style>

<template>
  <div v-if="codeFormData.info">
    <FieldHead />
    <a-table
      :columns="fieldColumns"
      row-key="capJavaField"
      sticky
      :data-source="codeFormData.info.columns"
      :row-selection="{
        selectedRowKeys: fieldTable.selectedKeys,
        onChange,
      }"
      table-layout="fixed"
    ></a-table>
  </div>
</template>

<script setup lang="ts">
import { codeFormData } from '../../data/form';
import { fieldColumns } from './data/columns';
import { fieldTable } from './data/table';
import FieldHead from './head/Head.vue';
const onChange = (keys: any[]) => {
  fieldTable.value.selectedKeys = keys;
};
</script>

<style lang="scss" scoped></style>

<template>
  <a-card class="system__module">
    <OperlogTable />
  </a-card>
</template>

<script setup lang="ts">
import OperlogTable from './table/OperlogTable.vue';
</script>

<style lang="scss" scoped>
.system__module {
  :deep(.ant-card-body) {
    height: 100%;
  }
}
</style>

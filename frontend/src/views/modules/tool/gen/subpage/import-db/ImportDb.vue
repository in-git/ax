<template>
  <a-card
    class="ax__template"
    :body-style="{ height: '100%', overflow: 'hidden', paddingBottom: '0' }"
  >
    <a-flex vertical class="h-100" :gap="8">
      <AXHead />
      <div class="data__content">
        <TableVue></TableVue>
      </div>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { dbList } from './data/curd';
import AXHead from './pages/AXHead.vue';
import TableVue from './pages/Table.vue';

onMounted(() => {
  dbList();
});
</script>

<style lang="scss" scoped></style>

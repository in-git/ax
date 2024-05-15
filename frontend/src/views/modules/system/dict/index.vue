<template>
  <a-card
    class="ax__template"
    :body-style="{ height: '100%', overflow: 'hidden', paddingBottom: '0' }"
  >
    <a-flex vertical class="h-100">
      <HeadVue />
      <div class="data__content">
        <TableVue v-if="viewMode === 'table'"></TableVue>
        <CardVue v-else></CardVue>
      </div>
      <FooterVue></FooterVue>
      <FormVue />
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { typeList } from './data/curd';
import { viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import FormVue from './pages/components/AXForm.vue';
import HeadVue from './pages/components/AXHead.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';

onMounted(async () => {
  await typeList();
});
</script>

<style lang="scss" scoped></style>

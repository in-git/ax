<template>
  <a-card class="ax__template SystemPost" :body-style="bodyStyle">
    <a-flex vertical class="h-100">
      <!-- 顶部筛选，查询选项 -->
      <HeadVue />
      <!-- 表单数据 -->
      <div class="data__content">
        <TableVue v-if="viewMode === 'table'"></TableVue>
        <CardVue v-else></CardVue>
      </div>
      <!-- 底部分页信息 -->
      <FooterVue></FooterVue>
      <!-- 表单编辑 -->
      <FormVue />
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { bodyStyle } from '@/global/config/gen';
import { postList } from './data/curd';
import { postResetForm, postShowForm } from './data/form';
import { fetchStatusOptions } from './data/options';
import { resetPostQuery, viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import FormVue from './pages/components/AXForm.vue';
import HeadVue from './pages/components/AXHead.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';

onMounted(async () => {
  await postList();
  await fetchStatusOptions();
});

onUnmounted(() => {
  postShowForm.value = false;
  postResetForm();
  resetPostQuery();
});
</script>

<style lang="scss" scoped></style>

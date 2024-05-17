<template>
  <a-card class="ax__template SystemNotice" :body-style="bodyStyle">
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
import { noticeList } from './data/curd';
import { noticeResetForm, noticeShowForm } from './data/form';
import { noticeTypeOptionsFetch, statusOptionsFetch } from './data/options';
import { resetNoticeQuery, viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import FormVue from './pages/components/AXForm.vue';
import HeadVue from './pages/components/AXHead.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';

onMounted(async () => {
  await noticeList();
  await noticeTypeOptionsFetch();
  await statusOptionsFetch();
});

onUnmounted(() => {
  noticeShowForm.value = false;
  noticeResetForm();
  resetNoticeQuery();
});
</script>

<style lang="scss" scoped></style>

<template>
  <a-card class="ax__template SystemMenu" :body-style="bodyStyle">
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
import { menuList } from './data/curd';
import { resetMenuQuery,viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import FormVue from './pages/components/AXForm.vue';
import HeadVue from './pages/components/AXHead.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';
import { menuShowForm, menuResetForm } from './data/form';
import {
}from './data/options';

onMounted(async() => {
  await menuList();
});

onUnmounted(() => {
  menuShowForm.value = false;
  menuResetForm();
  resetMenuQuery()
});
</script>

<style lang="scss" scoped></style>

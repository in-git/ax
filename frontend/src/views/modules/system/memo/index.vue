<template>
  <a-card class="ax__template SystemMemo" :body-style="bodyStyle">
    <a-flex vertical class="h-100">
      <!-- 顶部筛选，查询选项 -->
      <HeadVue />
      <!-- loading效果 -->
      <!-- 中间数据 -->
      <div class="data__content">
        <TableVue v-if="viewMode === 'table'"></TableVue>
        <CardVue v-else></CardVue>
      </div>
      <!-- 底部分页信息 -->
      <FooterVue></FooterVue>

      <!-- 绝对定位模块 -->
      <!-- 表单编辑 -->
      <FormVue />
    </a-flex>

    <!-- end -->
  </a-card>
</template>

<script setup lang="ts">
import { bodyStyle } from '@/global/config/gen';
import { memoList } from './data/curd';
import { viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import FormVue from './pages/components/AXForm.vue';
import HeadVue from './pages/components/AXHead.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';

onMounted(async () => {
  await memoList();
});
</script>

<style lang="scss" scoped></style>

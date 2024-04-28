<template>
  <a-card class="system__template test">
    <a-flex vertical class="h-100">
      <!-- 顶部筛选，查询选项 -->
      <HeadVue />
      <!-- 中间数据 -->
      <div class="data__content">
        <TableVue v-if="viewMode === 'table'"></TableVue>
        <CardVue v-else></CardVue>
      </div>
      <!-- 底部分页信息 -->
      <FooterVue></FooterVue>
      <!-- 表单编辑 -->
      <FormVue />
    </a-flex>

    <!-- end -->
  </a-card>
</template>

<script setup lang="ts">
import { testList } from './data/curd';
import { viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import FormVue from './pages/components/AXForm.vue';
import HeadVue from './pages/components/AXHead.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';

onMounted(async () => {
  await testList();
});
</script>

<style lang="scss" scoped>
.test {
  height: 100%;
  overflow-y: hidden;
  :deep(.ant-card-body) {
    height: 100%;
  }
}
</style>

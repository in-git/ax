<template>
  <a-card class="system__template role">
    <a-flex vertical class="h-100">
      <!-- 顶部筛选，查询选项 -->
      <HeadVue />
      <!-- loading效果 -->
      <!-- 中间数据 -->
      <div class="data__content">
        <TableVue v-if="viewMode === 'table'"></TableVue>
        <CardVue v-else></CardVue>
      </div>
      <FooterVue></FooterVue>
    </a-flex>
    <RoleForm />
    <RoleResource />
    <RoleAssign />
    <!-- end -->
  </a-card>
</template>

<script setup lang="ts">
import RoleAssign from './assign/RoleAssign.vue';
import { roleList } from './data/curd';
import { viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import RoleForm from './pages/components/AXForm.vue';
import HeadVue from './pages/components/AXHead.vue';
import RoleResource from './pages/components/RoleResource.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';

onMounted(async () => {
  await roleList();
});
</script>

<style lang="scss" scoped>
.role {
  :deep(.ant-card-body) {
    height: 100%;
  }
}
</style>

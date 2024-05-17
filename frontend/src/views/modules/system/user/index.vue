<template>
  <a-card class="ax__template SystemUser" :body-style="bodyStyle">
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
import { userList } from './data/curd';
import { userResetForm, userShowForm } from './data/form';
import {} from './data/options';
import { resetUserQuery, viewMode } from './data/table';
import FooterVue from './pages/components/AXFooter.vue';
import HeadVue from './pages/components/AXHead.vue';
import FormVue from './pages/components/UserForm.vue';
import CardVue from './pages/table-card/AXCard.vue';
import TableVue from './pages/table-card/AXTable.vue';

onMounted(async () => {
  await userList();
});

onUnmounted(() => {
  userShowForm.value = false;
  userResetForm();
  resetUserQuery();
});
</script>

<style lang="scss" scoped></style>

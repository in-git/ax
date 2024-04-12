<template>
  <div class="system-template">
    <!-- 顶部筛选，查询选项 -->
    <HeadVue />
    <!-- 中间数据 -->
    <div class="data__content">
      <WindTable v-if="viewMode === 'table'"></WindTable>
      <CardVue v-else></CardVue>
    </div>
    <!-- 底部分页信息 -->
    <FooterVue></FooterVue>

    <!-- 绝对定位模块 -->
    <!-- 表单编辑 -->
    <FormVue />
    <!-- loading效果 -->
    <Loading @cancel="cancelRequest" v-if="websiteTable.loading" class="loading" />
    <!-- end -->
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { websiteList } from './data/curd';
import { viewMode, websiteTable } from './data/table';
import FooterVue from './pages/components/WindFooter.vue';
import FormVue from './pages/components/WindForm.vue';
import HeadVue from './pages/components/WindHead.vue';
import CardVue from './pages/table-card/WindCard.vue';
import WindTable from './pages/table-card/WindTable.vue';

const cancelRequest = () => {
  websiteTable.value.loading = false;
  message.warn('已取消请求');
};

onMounted(() => {
  websiteList();
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="system-module flex flex-col">
    <!-- loading效果 -->
    <Loading @cancel="cancelRequest" v-if="websiteTable.loading" class="loading" />

    <!-- 顶部筛选，查询选项 -->
    <HeadVue />

    <!-- 中间数据 -->
    <div class="data__content">
      <WindTable v-if="viewMode === 'table'"></WindTable>
      <CardVue v-else></CardVue>
    </div>

    <!-- 底部分页信息 -->
    <FooterVue></FooterVue>

    <!-- 表单编辑 -->
    <FormVue />
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { websiteList } from './data/curd';
import { viewMode, websiteTable } from './data/table';
import FooterVue from './pages/components/WindFooter.vue';
import HeadVue from './pages/components/WindHead.vue';
import FormVue from './pages/form/WindForm.vue';
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

<style lang="scss" scoped>
.data__content {
  flex: 1;
  overflow-y: auto;
}
.loading {
  position: absolute;
  top: 0;
  left: 0;
  background: #cfcfcf4f;
  z-index: 100;
}
</style>

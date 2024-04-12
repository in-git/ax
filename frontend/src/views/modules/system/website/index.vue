<template>
  <div class="system-module flex flex-col">
    <Loading @cancel="cancelRequest" v-if="websiteTable.loading" class="loading" />
    <HeadVue />
    <div class="data__content">
      <TableVue v-if="viewMode === 'table'"></TableVue>
      <CardVue v-else></CardVue>
    </div>
    <FooterVue></FooterVue>
    <!-- 表单编辑 -->
    <FormVue />
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import FooterVue from './components/Footer.vue';
import HeadVue from './components/Head.vue';
import { websiteList } from './data/curd';
import { viewMode, websiteTable } from './data/table';
import FormVue from './form/Form.vue';
import CardVue from './table/Card.vue';
import TableVue from './table/Table.vue';

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
.system-module {
  overflow: hidden;
}
</style>

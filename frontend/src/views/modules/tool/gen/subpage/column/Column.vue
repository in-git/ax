<template>
  <a-card class="ax__template" :body-style="{ height: '100%', overflow: 'hidden', padding: '0 ' }">
    <a-flex class="h-100">
      <Sidebar />
      <div class="flex-1">
        <template v-if="currentStep.type === 'base'">
          <Base />
        </template>
        <template v-else-if="currentStep.type === 'code'">
          <CodeVue />
        </template>
        <template v-else>
          <Field />
        </template>
      </div>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { currentStep, resetStep } from './data/config';
import { getTableInfo } from './data/curd';
import { resetCodeFormData } from './data/data';
import Base from './dynamic-components/Base.vue';
import CodeVue from './dynamic-components/Code.vue';
import Field from './dynamic-components/Field.vue';
import Sidebar from './pages/Sidebar.vue';

const props = defineProps<{
  data: number;
}>();

provide('code', () => {
  return props.data;
});
watch(
  props,
  () => {
    getTableInfo(props.data);
  },
  {
    deep: true,
    immediate: true,
  },
);

onUnmounted(() => {
  resetStep();
  resetCodeFormData();
});
</script>

<style lang="scss" scoped></style>

<template>
  <a-form
    :model="codeFormData"
    :wrapper-col="{ span: 8 }"
    :label-col="{
      span: 4,
    }"
  >
    <SystemModal title="生成信息编辑" v-model:visible="codeShowForm">
      <div class="h-100 flex flex-col">
        <div class="flex-1 p-8">
          <a-tabs tab-position="left" class="h-100">
            <a-tab-pane key="base-info" tab="基础信息">
              <BaseInfo></BaseInfo>
            </a-tab-pane>
            <a-tab-pane key="generate-info" tab="生成信息">
              <GenerateInfo></GenerateInfo>
            </a-tab-pane>
            <a-tab-pane key="field-info" tab="字段信息">
              <FiledInfo></FiledInfo>
            </a-tab-pane>
          </a-tabs>
        </div>
        <FormFooter />
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { codeFormData, codeShowForm } from '../data/form';
import BaseInfo from './base-info/BaseInfo.vue';
import FiledInfo from './field-info/FieldInfo.vue';
import GenerateInfo from './generate-info/GenerateInfo.vue';
</script>

<style lang="scss" scoped></style>

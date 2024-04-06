<template>
  <a-form
    :model="jobForm"
    :wrapper-col="{ span: 8 }"
    :label-col="{
      span: 4,
    }"
  >
    <SystemModal title="定时任务编辑" v-model:visible="jobShowForm">
      <div class="h-100 flex flex-col">
        <div class="flex-1 p-8">
          <a-form-item label="任务名称">
            <a-input placeholder="请输入任务名称" v-model:value="jobForm.jobName"></a-input>
          </a-form-item>
          <a-form-item label="调用方法">
            <a-input placeholder="调用方法"></a-input>
          </a-form-item>
          <a-form-item label="表达式">
            <a-input placeholder="表达式" v-model:value="jobForm.cronExpression"></a-input>
          </a-form-item>
          <a-form-item label="执行策略">
            <a-radio-group v-model:value="jobForm.invokeTarget"></a-radio-group>
          </a-form-item>
          <a-form-item label="是否并发">
            <a-radio-group
              :options="isOptions"
              v-model:value="jobForm.cronExpression"
            ></a-radio-group>
          </a-form-item>
          <a-row>
            <a-col :span="8" :offset="4">
              <a-button type="primary" html-type="submit">保存</a-button>
            </a-col>
          </a-row>
        </div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { isOptions } from '@/global/options/system';
import { jobForm, jobShowForm } from '../data/form';
</script>

<style lang="scss" scoped></style>

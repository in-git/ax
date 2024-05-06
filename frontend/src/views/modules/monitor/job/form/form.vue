<template>
  <a-form
    :model="jobForm"
    :wrapper-col="{ span: 8 }"
    :label-col="{
      span: 4,
    }"
  >
    <SystemModal title="定时任务表单" v-model:visible="jobShowForm">
      <div class="h-100 flex flex-col">
        <a-row>
          <a-col :span="8" :offset="4">
            <h3>定时任务编辑</h3>
          </a-col>
        </a-row>

        <div class="flex-1 p-8">
          <a-form-item label="任务名称">
            <a-input placeholder="请输入任务名称" v-model:value="jobForm.jobName"></a-input>
          </a-form-item>
          <a-form-item label="任务分组">
            <a-radio-group
              v-model:value="jobForm.jobGroup"
              :options="jobGroupOptions"
            ></a-radio-group>
          </a-form-item>
          <a-form-item label="调用方法">
            <a-input placeholder="调用方法" v-model:value="jobForm.invokeTarget"></a-input>
          </a-form-item>
          <a-form-item label="表达式">
            <a-input placeholder="表达式" v-model:value="jobForm.cronExpression"></a-input>
          </a-form-item>
          <a-form-item label="执行策略">
            <a-segmented
              v-model:value="jobForm.misfirePolicy"
              :options="misfirePolicyOptions"
            ></a-segmented>
          </a-form-item>
          <a-form-item label="是否并发">
            <a-radio-group :options="isOptions" v-model:value="jobForm.concurrent"></a-radio-group>
          </a-form-item>
          <a-form-item label="状态">
            <a-radio-group :options="statusOptions" v-model:value="jobForm.status"></a-radio-group>
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
import { isOptions, statusOptions } from '@/global/options/system';
import { getDict } from '../data/curd';
import { jobForm, jobShowForm } from '../data/form';
import { jobGroupOptions, misfirePolicyOptions } from '../data/options';

onMounted(async () => {
  await getDict();
  console.log(jobGroupOptions.value);
});
</script>

<style lang="scss" scoped>
h3 {
  font-size: 18px;
  font-weight: bold;
}
</style>

<template>
  <a-form
    :rules="jobRules"
    :model="jobForm"
    @finish="submit"
    :label-col="{ span: 6 }"
    label-align="left"
  >
    <a-modal
      :footer="false"
      title="定时任务调度"
      v-model:open="jobShowForm"
      get-container=".ax__template"
    >
      <a-card title="编辑/新增" class="ax_sticky_top">
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
        <a-form-item label="任务名称" name="jobName">
          <a-input placeholder="请输入任务名称" v-model:value="jobForm.jobName">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="jobForm.jobName" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="任务组名" name="jobGroup">
          <a-input placeholder="请输入任务组名" v-model:value="jobForm.jobGroup">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="jobForm.jobGroup" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="cron执行表达式" name="cronExpression">
          <a-input placeholder="请输入cron执行表达式" v-model:value="jobForm.cronExpression">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="jobForm.cronExpression" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="计划执行错误策略" name="misfirePolicy">
          <a-select
            placeholder="请输入计划执行错误策略"
            v-model:value="jobForm.misfirePolicy"
            :options="executionOptions"
          ></a-select>
        </a-form-item>
        <a-form-item label="是否并发执行" name="concurrent">
          <a-select :options="allowConcurrent" v-model:value="jobForm.concurrent"></a-select>
        </a-form-item>
        <a-form-item label="状态" name="status">
          <a-radio-group v-model:value="jobForm.status" :options="executionStatus"></a-radio-group>
        </a-form-item>
        <a-form-item label="备注信息" name="remark">
          <a-textarea placeholder="请输入备注信息" v-model:value="jobForm.remark"></a-textarea>
        </a-form-item>
      </a-card>
    </a-modal>
  </a-form>
</template>

<script setup lang="ts">
import { createJob, updateJob } from '@/api/modules/monitor/job/job';
import { response } from '@/utils/table/table';
import Memo from '@/views/selector/memo/Memo.vue';
import { jobList } from '../../data/curd';
import { jobForm, jobRules, jobShowForm } from '../../data/form';
import { allowConcurrent, executionOptions, executionStatus } from '../../data/options';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (jobForm.value.jobGroup) {
    await response(updateJob, jobForm.value);
  } else {
    await response(createJob, jobForm.value);
  }
  await jobList();
  loading.value = false;
  jobShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>

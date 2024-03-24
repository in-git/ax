<template>
  <div class="operlog-head pt-8">
    <h3 class="text-16 mb-12">操作日志</h3>
    <div class="flex justify-between align-center">
      <a-flex :gap="8">
        <a-select
          style="width: 120px"
          :options="operationType"
          v-model:value="logQuery.businessType"
          placeholder="Select type"
          allowClear
          @change="getLogs"
        ></a-select>
        <a-segmented @change="getLogs" v-model:value="logQuery.status" :options="successStatus" />
        <a-range-picker allowClear style="width: 240px" />
        <a-button type="primary" :loading="operLogConf.loading" @click="getLogs">Search</a-button>
      </a-flex>
      <div class="flex gc-4">
        <a-popconfirm title="Will be clear all logs" @confirm="clear" placement="bottomRight">
          <a-button danger>Clear</a-button>
        </a-popconfirm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clearLogs } from '@/api/modules/monitor/operlog/operlog';
import { successStatus } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { getLogs, logQuery, operLogConf } from '../data';
import { operationType } from './data';

const clear = async () => {
  const { data } = await clearLogs();
  message.success(data.msg);
};
</script>

<style lang="scss" scoped>
.operlog-head {
  padding-bottom: 12px;
}
</style>

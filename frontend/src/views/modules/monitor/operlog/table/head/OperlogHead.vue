<template>
  <div class="operlog-head pt-8">
    <h3 class="text-16 mb-12">操作日志</h3>
    <div class="flex justify-between align-center">
      <a-flex :gap="8" align="center">
        <a-button @click="getLogs" type="primary">刷新</a-button>
        <a-select
          style="width: 120px"
          :options="operationType"
          v-model:value="logQuery.businessType"
          placeholder="选择操作类型"
          allowClear
          @change="getLogs"
        ></a-select>
        <span>状态</span>
        <a-select
          style="width: 120px"
          @change="getLogs"
          v-model:value="logQuery.status"
          :options="successStatus"
          allowClear
        />
      </a-flex>
      <div class="flex gc-4">
        <a-popconfirm title="将会清空所有日志" @confirm="clear" placement="bottomRight">
          <a-button danger>
            <delete-outlined />
          </a-button>
        </a-popconfirm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clearLogs } from '@/api/modules/monitor/operlog/operlog';
import { successStatus } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { getLogs } from '../../data/curd';
import { logQuery } from '../../data/data';
import { operationType } from '../../data/options';

const clear = async () => {
  const { data } = await clearLogs();
  message.success(data.msg);
  getLogs();
};
</script>

<style lang="scss" scoped>
.operlog-head {
  padding-bottom: 12px;
}
</style>

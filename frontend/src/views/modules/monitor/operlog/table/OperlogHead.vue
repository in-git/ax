<template>
  <div class="table__head">
    <a-card title="操作日志">
      <a-flex justify="space-between" :align="'center'">
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
      </a-flex>

      <div class="flex justify-right mt-12">
        <a-pagination
          @change="change"
          v-model:current="logQuery.pageNum"
          :total="logQuery.total"
          show-less-items
          :page-size="logQuery.pageSize"
        />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { clearLogs } from '@/api/modules/monitor/operlog/operlog';
import { successStatus } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { getLogs } from '../data/curd';
import { logQuery } from '../data/data';
import { operationType } from '../data/options';

const clear = async () => {
  const { data } = await clearLogs();
  message.success(data.msg);
  getLogs();
};
const change = (page: number, pageSize: number) => {
  logQuery.value.pageNum = page;
  logQuery.value.pageSize = pageSize;
  getLogs();
};
</script>

<style lang="scss" scoped>
.table__head {
  padding-bottom: 12px;
}
</style>

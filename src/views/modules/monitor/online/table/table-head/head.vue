<template>
  <TableHead title="在线用户">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="刷新">
          <a-button type="link" @click="onlineList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search
          placeholder="请输入登录地址"
          allow-clear
          @search="onlineList"
          v-model:value="onlineQuery.ipaddr"
        ></a-input-search>
        <a-input-search
          placeholder="请输入用户名"
          allow-clear
          @search="onlineList"
          v-model:value="onlineQuery.userName"
        ></a-input-search>
      </div>

      <TableField module-name="online" v-model:columns="onlineColumns" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import TableField from '@/views/components/table/Field.vue';
import { ReloadOutlined } from '@ant-design/icons-vue';
import { onlineColumns } from '../../data/column';
import { onlineList } from '../../data/curd';
import { onlineQuery } from '../../data/table';
</script>

<style lang="scss" scoped></style>

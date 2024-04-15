<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">在线用户</h3>
    </template>
    <a-flex justify="space-between" :align="'center'">
      <a-flex :gap="4" :align="'center'">
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
      </a-flex>
      <TableField module-name="online" v-model:columns="onlineColumns" />
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import TableField from '@/views/components/table/Field.vue';
import { ReloadOutlined } from '@ant-design/icons-vue';
import { onlineColumns } from '../../data/column';
import { onlineList } from '../../data/curd';
import { onlineQuery } from '../../data/table';
</script>

<style lang="scss" scoped></style>

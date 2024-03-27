<template>
  <div class="login-head">
    <TableHead title="登陆日志">
      <div class="flex">
        <div class="flex gc-4">
          <a-input
            placeholder="Please enter ip"
            allow-clear
            v-model:value="loginLogQuery.ipaddr"
          ></a-input>
          <a-input
            placeholder="Please enter username"
            allow-clear
            v-model:value="loginLogQuery.userName"
          ></a-input>
          <a-button type="primary" @click="loadLoginList">Search</a-button>
        </div>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/table/table-head/TableHead.vue';
import { loadLoginList, loginLogQuery } from '../card/data';
</script>

<style lang="scss" scoped></style>

<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">待导入的数据库列表</h3>
    </template>

    <a-flex class="mb-12" :gap="12" justify="space-between">
      <a-flex>
        <div>
          <a-input-search
            v-model:value="dbQuery.tableName"
            @search="dbList"
            enter-button
            allow-clear
          ></a-input-search>
        </div>
        <a-button :loading="dbTable.loading" @click="dbList">刷新</a-button>
      </a-flex>
      <a-button type="primary" :disabled="dbKeys.length === 0" @click="importDb()">
        批量导入
      </a-button>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { dbList, importDb } from '../data/curd';
import { dbKeys, dbQuery, dbTable } from '../data/table';
</script>

<style lang="scss" scoped></style>

<template>
  <div class="menu-head mb-4">
    <a-card>
      <h3>菜单管理</h3>
      <div class="mt-12 flex align-center justify-between">
        <div>
          <a-button>Create</a-button>
        </div>
        <div class="flex gc-4 align-center">
          <a-input-search
            allow-clear
            v-model:value="menuConfig.query.menuName"
            placeholder="Please enter menu name"
            style="width: 200px"
            @search="loadMenuData"
          ></a-input-search>
          <a-divider type="vertical" />
          <a-select
            :options="statusOptions"
            @change="loadMenuData"
            v-model:value="menuConfig.query.status"
            style="width: 100px"
            placeholder="Status"
          ></a-select>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { statusOptions } from '@/global/options/system';
import { loadMenuData, menuConfig } from '../table/data';
</script>

<style lang="scss" scoped></style>

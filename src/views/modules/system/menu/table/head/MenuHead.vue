<template>
  <div class="menu-head mb-4">
    <a-card>
      <h3>菜单管理</h3>
      <div class="mt-12 flex align-center justify-between">
        <div class="flex gc-4">
          <a-tooltip title="Create">
            <a-button @click="create" type="primary">
              <template #icon>
                <PlusOutlined />
              </template>
            </a-button>
          </a-tooltip>
          <a-tooltip title="Edit">
            <a-button @click="edit" :disabled="menuConfig.selectedKeys.length === 0">
              <EditOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="Reload">
            <a-button @click="loadMenuData">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="Delete ">
            <a-button @click="delMenu()" danger :disabled="menuConfig.selectedKeys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
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
          <a-segmented
            :options="statusOptions"
            @change="loadMenuData"
            v-model:value="menuConfig.query.status"
            placeholder="Status"
          ></a-segmented>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { statusOptions } from '@/global/options/system';
import { DeleteOutlined, EditOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { createMenuData, delMenu, showMenuFormForm } from '../../table/curd';
import { loadMenuData, menuConfig } from '../../table/data';
const edit = () => {
  showMenuFormForm();
};
const create = () => {
  createMenuData();
};
</script>

<style lang="scss" scoped></style>

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
          <a-tooltip title="编辑">
            <a-button @click="edit" :disabled="menuKeys.length === 0">
              <EditOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="重新加载">
            <a-button @click="loadMenuData">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
          <a-input-search
            allow-clear
            v-model:value="menuQuery.menuName"
            placeholder="请输入菜单名"
            style="width: 200px"
            @search="loadMenuData"
          ></a-input-search>
        </div>
        <div class="flex gc-4 align-center">
          <a-tooltip title="Delete ">
            <a-button @click="delMenu()" danger :disabled="menuKeys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { DeleteOutlined, EditOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { createMenuData, delMenu, editMenu, loadMenuData } from '../../data/curd';
import { menuKeys, menuQuery } from '../../data/data';
const edit = () => {
  editMenu();
};
const create = () => {
  createMenuData();
};
</script>

<style lang="scss" scoped></style>

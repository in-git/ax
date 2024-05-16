<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">菜单权限</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          v-model:value="menuQuery.menuName"
          style="width: 160px"
          placeholder="请输入菜单名称"
          @press-enter="menuList"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          v-model:value="menuQuery.component"
          style="width: 160px"
          placeholder="请输入组件路径"
          @press-enter="menuList"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="menuList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:menu:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="menuCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:menu:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="menuEdit()" :disabled="menuKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>
          <div v-perm="'system:notice:list'">
            <a-tooltip title="刷新">
              <a-button type="link" @click="menuList">
                <ReloadOutlined />
              </a-button>
            </a-tooltip>
          </div>
          <div v-perm="'system:menu:remove'">
            <a-popconfirm
              title="确定要删除吗"
              :disabled="menuKeys.length === 0"
              placement="bottomRight"
              @confirm="menuDelete()"
            >
              <a-tooltip title="批量删除">
                <a-button danger type="link" :disabled="menuKeys.length === 0">
                  <DeleteOutlined />
                </a-button>
              </a-tooltip>
            </a-popconfirm>
          </div>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:menu:export'">
          <a-tooltip title="导出">
            <a-button type="link" @click="menuExport">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>

        <FieldVue :columns="menuColumns" :module-name="menuTable.moduleName" />
        <div>
          <a-tooltip title="卡片模式" @click="viewMode = 'card'" v-if="viewMode === 'table'">
            <a-button type="link">
              <OrderedListOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="表格模式" @click="viewMode = 'table'" v-else>
            <a-button type="link">
              <AppstoreAddOutlined />
            </a-button>
          </a-tooltip>
        </div>
      </a-flex>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import {
  AppstoreAddOutlined,
  OrderedListOutlined,
  type DeleteOutlined,
  type ReloadOutlined,
} from '@ant-design/icons-vue';
import { menuColumns } from '../../data/column';
import { menuCreate, menuDelete, menuEdit, menuExport, menuList } from '../../data/curd';
import {} from '../../data/options';
import { menuKeys, menuQuery, menuTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>

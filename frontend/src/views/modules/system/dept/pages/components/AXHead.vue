<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">部门列表</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="deptList"
          v-model:value="deptQuery.deptName"
          style="width: 160px"
          placeholder="请输入部门名称"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="deptList"
          v-model:value="deptQuery.leader"
          style="width: 160px"
          placeholder="请输入负责人"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="deptList"
          v-model:value="deptQuery.phone"
          style="width: 160px"
          placeholder="请输入联系电话"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-select
          v-model:value="deptQuery.status"
          style="width: 160px"
          placeholder="请选择部门状态（0正常 1停用）"
          allow-clear
          @blur="deptList"
          :options="statusOptions"
        ></a-select>
      </div>
      <a-button type="primary" @click="deptList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:dept:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="deptCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:dept:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="deptEdit()" :disabled="deptKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="deptList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:dept:remove'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="deptKeys.length === 0"
            placement="bottomRight"
            @confirm="deptDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="deptKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="deptColumns" :module-name="deptTable.moduleName" />
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
import { deptColumns } from '../../data/column';
import { deptCreate, deptDelete, deptEdit, deptList } from '../../data/curd';
import { statusOptions } from '../../data/options';
import { deptKeys, deptQuery, deptTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>

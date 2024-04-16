<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">备忘录</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="memoList"
          v-model:value="memoQuery.title"
          style="width: 160px"
          placeholder="请输入备忘录标题"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="memoList"
          v-model:value="memoQuery.value"
          style="width: 160px"
          placeholder="请输入备忘录的值"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="memoList"
          v-model:value="memoQuery.description"
          style="width: 160px"
          placeholder="请输入备忘录描述"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="memoList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:memo:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="memoCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:memo:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="memoEdit()" :disabled="memoKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="memoList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:memo:export'">
          <a-tooltip title="导出">
            <a-button type="link" @click="memoExport">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>

        <div v-perm="'system:memo:remove'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="memoKeys.length === 0"
            placement="bottomRight"
            @confirm="memoDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="memoKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="memoColumns" :module-name="memoTable.moduleName" />
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
import { memoColumns } from '../../data/column';
import { memoCreate, memoDelete, memoEdit, memoExport, memoList } from '../../data/curd';
import {} from '../../data/options';
import { memoKeys, memoQuery, memoTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>

<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">定时任务调度</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @press-enter="jobList"
          v-model:value="jobQuery.misfirePolicy"
          style="width: 160px"
          placeholder="请输入计划执行错误策略"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @press-enter="jobList"
          v-model:value="jobQuery.concurrent"
          style="width: 160px"
          placeholder="请输入是否并发执行"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @press-enter="jobList"
          v-model:value="jobQuery.status"
          style="width: 160px"
          placeholder="请输入状态"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="jobList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:job:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="jobCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:job:edit'">
            <a-tooltip title="编辑(双击)">
              <a-button type="link" @click="jobEdit()" :disabled="jobKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="jobList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:job:export'">
          <a-tooltip title="导出">
            <a-button type="link" @click="jobExport">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>

        <div v-perm="'system:job:remove'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="jobKeys.length === 0"
            placement="bottomRight"
            @confirm="jobDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="jobKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="jobColumns" :module-name="jobTable.moduleName" />
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
import { jobColumns } from '../../data/column';
import { jobCreate, jobDelete, jobEdit, jobExport, jobList } from '../../data/curd';
import {} from '../../data/options';
import { jobKeys, jobQuery, jobTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>

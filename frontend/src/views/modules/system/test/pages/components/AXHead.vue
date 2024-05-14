<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">系统测试表</h3>
    </template>

   <a-flex class="mb-12" :gap="12" wrap="wrap">
    <div>
       <a-input
         @blur="testList"
         v-model:value="testQuery.textareaField"
         style="width: 160px"
         placeholder="请输入文本域"
         allow-clear
       ></a-input>
     </div>
    <div>
       <a-input
         @blur="testList"
         v-model:value="testQuery.treeField"
         style="width: 160px"
         placeholder="请输入树形选择器"
         allow-clear
       ></a-input>
     </div>
      <a-button type="primary" @click="testList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
        <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">

         <div v-perm="'system:test:add'">
             <a-tooltip title="新建">
                <a-button type="primary" @click="testCreate">
                  <PlusOutlined />
                </a-button>
            </a-tooltip>
         </div>

         <div v-perm="'system:test:edit'">
              <a-tooltip title="编辑">
                <a-button type="link" @click="testEdit()" :disabled="testKeys.length !== 1">
                  <EditOutlined />
                </a-button>
              </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="testList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
         </a-flex>

        </a-flex>
       <a-flex>

       <div v-perm="'system:test:export'">
         <a-tooltip title="导出">
           <a-button type="link" @click="testExport" >
             <ExportOutlined />
           </a-button>
         </a-tooltip>
       </div>

       <div v-perm="'system:test:remove'">
        <a-popconfirm
          title="确定要删除吗"
          :disabled="testKeys.length === 0"
          placement="bottomRight"
          @confirm="testDelete()"
        >
          <a-tooltip title="批量删除">
            <a-button danger type="link" :disabled="testKeys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </a-popconfirm>
        </div>

        <FieldVue :columns="testColumns" :module-name="testTable.moduleName" />
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
import {
} from '../../data/options';
import FieldVue from '@/views/components/table/Field.vue';
import {
  AppstoreAddOutlined,
  OrderedListOutlined,
  type DeleteOutlined,
  type ReloadOutlined,
} from '@ant-design/icons-vue';
import { testColumns } from '../../data/column';
import {
  testCreate,
  testDelete,
  testEdit,
  testList,
testExport } from '../../data/curd';
import { viewMode,
  testKeys,
  testTable,
  testQuery
} from '../../data/table';


</script>

<style lang="scss" scoped></style>

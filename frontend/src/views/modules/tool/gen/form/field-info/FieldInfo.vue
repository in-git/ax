<template>
  <div v-if="codeFormData.info">
    <a-table
      :columns="formatColumns(fieldColumns)"
      row-key="capJavaField"
      sticky
      :data-source="codeFormData.info.columns"
      expandFixed="right"
      :scroll="{ y: 500 }"
      :pagination="{
        pageSize: 10,
      }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'isInsert'">
          <a-switch
            un-checked-value="0"
            size="small"
            v-model:checked="record.isInsert"
            checked-value="1"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isEdit'">
          <a-switch
            un-checked-value="0"
            size="small"
            v-model:checked="record.isEdit"
            checked-value="1"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isList'">
          <a-switch
            un-checked-value="0"
            size="small"
            v-model:checked="record.isList"
            checked-value="1"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isQuery'">
          <a-switch
            un-checked-value="0"
            size="small"
            v-model:checked="record.isQuery"
            checked-value="1"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isRequired'">
          <a-switch
            un-checked-value="0"
            size="small"
            v-model:checked="record.isRequired"
            checked-value="1"
          ></a-switch>
        </template>
        <!-- <template v-else-if="column.dataIndex === 'operation'">
          <a-dropdown trigger="click">
            <EllipsisOutlined />
          </a-dropdown>
        </template> -->
      </template>

      <template #expandedRowRender="{ record }">
        <a-card :bordered="false" class="addition">
          <div>
            <a-row :gutter="12">
              <a-col :span="6">
                <div class="flex">
                  <div class="label">字段描述</div>
                  <a-input
                    class="w-100"
                    v-model:value="record.columnComment"
                    :options="javaTypeOptions"
                  ></a-input>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="flex">
                  <div class="label">查询方式</div>
                  <a-select
                    class="flex-1"
                    v-model:value="record.queryType"
                    :options="queryOptions"
                  ></a-select>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="flex">
                  <div class="label">表单类型</div>
                  <a-select
                    class="w-100"
                    v-model:value="record.htmlType"
                    :options="htmlTypeOptions"
                  ></a-select>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="flex">
                  <div class="label">字段类型</div>
                  <a-select
                    class="w-100"
                    v-model:value="record.javaType"
                    :options="javaTypeOptions"
                  ></a-select>
                </div>
              </a-col>
            </a-row>
            <a-divider class="my-12" />
            <a-row :gutter="12">
              <a-col :span="6">
                <div class="flex">
                  <div class="label">是否主键</div>
                  <a-switch
                    un-checked-value="0"
                    size="small"
                    disabled
                    v-model:checked="record.isPk"
                    checked-value="1"
                  ></a-switch>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="flex">
                  <div class="label">字段排序</div>
                  <a-input-number
                    size="small"
                    class="w-100"
                    v-model:value="record.sort"
                  ></a-input-number>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { formatColumns } from '@/utils/table/table';
import { codeFormData } from '../../data/form';
import { fieldColumns } from './data/columns';
import { htmlTypeOptions, javaTypeOptions, queryOptions } from './data/options';
</script>

<style lang="scss" scoped>
.label {
  padding: 0 12px;
  white-space: nowrap;
  font-size: 12px;
  display: flex;
  text-align: center;
  align-items: center;
}
.addition {
  background: #f5f2f3;
  :deep(.ant-card-body) {
    // border: 2px solid #000;
  }
}
:deep(.ant-table-expanded-row-fixed) {
  padding: 0 !important;
}
</style>

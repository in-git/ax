<template>
  <div v-if="codeFormData.info">
    <a-table
      :columns="formatColumns(fieldColumns)"
      row-key="capJavaField"
      sticky
      :data-source="codeFormData.info.columns"
      :row-selection="{
        selectedRowKeys: fieldTable.selectedKeys,
        onChange,
      }"
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
        <template v-else-if="column.dataIndex === 'javaType'">
          <a-select
            class="w-100"
            v-model:value="record.javaType"
            :options="javaTypeOptions"
          ></a-select>
        </template>
        <template v-else-if="column.dataIndex === 'htmlType'">
          <a-select
            class="w-100"
            v-model:value="record.htmlType"
            :options="htmlTypeOptions"
          ></a-select>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-dropdown trigger="click">
            <a-button type="ghost">
              <EllipsisOutlined />
            </a-button>
          </a-dropdown>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { formatColumns } from '@/utils/table/table';
import type { EllipsisOutlined } from '@ant-design/icons-vue';
import { codeFormData } from '../../data/form';
import { fieldColumns } from './data/columns';
import { fieldTable } from './data/table';
const javaTypeOptions = [
  { label: '长整型', value: 'Long' },
  { label: '字符串', value: 'String' },
  { label: '整型', value: 'Integer' },
  { label: '双精度', value: 'Double' },
  { label: '大数', value: 'BigDecimal' },
  { label: '日期', value: 'Date' },
  { label: '布尔', value: 'Boolean' },
];

const htmlTypeOptions = [
  { label: '文本框', value: 'input' },
  { label: '文本域', value: 'textarea' },
  { label: '下拉框', value: 'select' },
  { label: '单选框', value: 'radio' },
  { label: '复选框', value: 'checkbox' },
  { label: '日期控件', value: 'datetime' },
  { label: '图片上传', value: 'imageUpload' },
  { label: '文件上传', value: 'fileUpload' },
  { label: '富文本控件', value: 'editor' },
];
const onChange = (keys: any[]) => {
  fieldTable.value.selectedKeys = keys;
};
</script>

<style lang="scss" scoped></style>

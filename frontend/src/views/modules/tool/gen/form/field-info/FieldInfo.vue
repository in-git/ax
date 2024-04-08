<template>
  <div v-if="codeFormData.info">
    <FieldHead />
    <a-table
      :columns="formatColumns(fieldColumns)"
      row-key="capJavaField"
      sticky
      :data-source="codeFormData.info.columns"
      :row-selection="{
        selectedRowKeys: fieldTable.selectedKeys,
        onChange,
      }"
      :scroll="{ y: 380 }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'isInsert'">
          <a-switch
            :un-checked-value="1"
            size="small"
            v-model:checked="record.isInsert"
            :checked-value="0"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isEdit'">
          <a-switch
            :un-checked-value="1"
            size="small"
            v-model:checked="record.isEdit"
            :checked-value="0"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isList'">
          <a-switch
            :un-checked-value="1"
            size="small"
            v-model:checked="record.isList"
            :checked-value="0"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isQuery'">
          <a-switch
            :un-checked-value="1"
            size="small"
            v-model:checked="record.isQuery"
            :checked-value="0"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'isRequired'">
          <a-switch
            :un-checked-value="1"
            size="small"
            v-model:checked="record.isRequired"
            :checked-value="0"
          ></a-switch>
        </template>
        <template v-else-if="column.dataIndex === 'javaType'">
          <a-select
            class="w-100"
            v-model:value="record.javaType"
            :options="javaTypeOptions"
          ></a-select>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-button type="ghost">
            <DoubleRightOutlined />
          </a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { formatColumns } from '@/utils/table/table';
import type { DoubleRightOutlined } from '@ant-design/icons-vue';
import { codeFormData } from '../../data/form';
import { fieldColumns } from './data/columns';
import { fieldTable } from './data/table';
import FieldHead from './head/Head.vue';
const javaTypeOptions = [
  { label: '长整型', value: 'Long' },
  { label: '字符串', value: 'String' },
  { label: '整型', value: 'Integer' },
  { label: '双精度', value: 'Double' },
  { label: '大数', value: 'BigDecimal' },
  { label: '日期', value: 'Date' },
  { label: '布尔', value: 'Boolean' },
];
const onChange = (keys: any[]) => {
  fieldTable.value.selectedKeys = keys;
};
</script>

<style lang="scss" scoped></style>

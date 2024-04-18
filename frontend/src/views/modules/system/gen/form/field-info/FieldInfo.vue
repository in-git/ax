<template>
  <div v-if="codeFormData.info">
    <a-table
      :columns="fieldColumns"
      row-key="capJavaField"
      sticky
      :data-source="codeFormData.info.columns"
      :pagination="{
        pageSize: 20,
        showLessItems: true,
        showQuickJumper: true,
      }"
    >
      <template #bodyCell="{ column, record }">
        <template v-for="item in switchKeys">
          <template v-if="item === column.dataIndex">
            <a-switch
              un-checked-value="0"
              size="small"
              v-model:checked="record[item]"
              checked-value="1"
            ></a-switch>
          </template>
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
              <a-col :span="7">
                <a-flex>
                  <div class="label">字段描述</div>
                  <a-input
                    class="w-100"
                    v-model:value="record.columnComment"
                    :options="javaTypeOptions"
                  ></a-input>
                </a-flex>
              </a-col>
              <a-col :span="5">
                <a-flex>
                  <div class="label">查询方式</div>
                  <a-select
                    class="flex-1"
                    v-model:value="record.queryType"
                    :options="queryOptions"
                  ></a-select>
                </a-flex>
              </a-col>
              <a-col :span="6">
                <a-flex>
                  <div class="label">表单类型</div>
                  <a-select
                    class="w-100"
                    v-model:value="record.htmlType"
                    :options="htmlTypeOptions"
                  ></a-select>
                </a-flex>
              </a-col>
              <a-col :span="6">
                <a-flex>
                  <div class="label">字段类型</div>
                  <a-select
                    class="w-100"
                    v-model:value="record.javaType"
                    :options="javaTypeOptions"
                  ></a-select>
                </a-flex>
              </a-col>
            </a-row>
            <a-divider class="my-12" />
            <a-row :gutter="12">
              <a-col :span="4">
                <a-flex :algin="'center'">
                  <div class="label">是否主键</div>
                  <a-switch
                    un-checked-value="0"
                    size="small"
                    disabled
                    v-model:checked="record.isPk"
                    checked-value="1"
                  ></a-switch>
                </a-flex>
              </a-col>
              <a-col :span="6">
                <a-flex class="flex">
                  <div class="label">字段排序</div>
                  <a-input-number
                    size="small"
                    class="w-100"
                    v-model:value="record.sort"
                  ></a-input-number>
                </a-flex>
              </a-col>
              <a-col :span="8">
                <a-flex>
                  <div class="label">下拉选项</div>
                  <a-select
                    class="w-100"
                    v-model:value="record.dictType"
                    :options="options"
                  ></a-select>
                </a-flex>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { optionSelect } from '@/api/modules/system/dict/dict';
import { dictToOptions } from '@/utils/table/table';
import { codeFormData } from '../../data/form';
import { fieldColumns } from './data/columns';
import { htmlTypeOptions, javaTypeOptions, queryOptions } from './data/options';

const switchKeys = ['isInsert', 'isEdit', 'isList', 'isQuery', 'isRequired'];

const options = ref();
const getOptions = async () => {
  const { data } = await optionSelect();
  if (data.data) {
    options.value = dictToOptions(data.data);
  }
};

onMounted(() => {
  getOptions();
});
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

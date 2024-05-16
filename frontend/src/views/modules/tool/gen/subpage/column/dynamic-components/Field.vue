<template>
  <div class="field-table">
    <TopTool>
      <template #left>
        <div class="system__icon" @click="goBack">
          <LeftOutlined />
        </div>
      </template>
      <template #right>
        <a-button type="primary" @click="next">
          <RightOutlined />
        </a-button>
      </template>
    </TopTool>
    <a-card :bordered="false" class="flex-1 table-container">
      <a-table
        :columns="formatColumns(fieldColumns, false)"
        row-key="capJavaField"
        sticky
        size="small"
        :data-source="codeFormData.info.columns"
        table-layout="fixed"
        :pagination="{
          pageSize: 20,
          showLessItems: true,
          showQuickJumper: true,
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-for="item in switchKeys">
            <template v-if="item === column.dataIndex">
              <CheckboxVue v-model="record[item]"></CheckboxVue>
            </template>
          </template>
        </template>

        <template #expandedRowRender="{ record }">
          <a-card :bordered="false" class="addition">
            <div>
              <a-row :gutter="8">
                <a-col :span="8">
                  <a-flex>
                    <div class="label">描述</div>
                    <a-input
                      class="w-100"
                      v-model:value="record.columnComment"
                      :options="javaTypeOptions"
                    ></a-input>
                  </a-flex>
                </a-col>
                <a-col :span="8">
                  <a-flex>
                    <div class="label">查询</div>
                    <a-select
                      class="flex-1"
                      v-model:value="record.queryType"
                      :options="queryOptions"
                    ></a-select>
                  </a-flex>
                </a-col>
                <a-col :span="8">
                  <a-flex>
                    <div class="label">填写</div>
                    <a-select
                      class="w-100"
                      v-model:value="record.htmlType"
                      :options="htmlTypeOptions"
                    ></a-select>
                  </a-flex>
                </a-col>
              </a-row>
              <a-divider class="my-12" />
              <a-row :gutter="12">
                <a-col :span="8">
                  <a-flex>
                    <div class="label">数据</div>
                    <a-select
                      class="w-100"
                      v-model:value="record.javaType"
                      :options="javaTypeOptions"
                    ></a-select>
                  </a-flex>
                </a-col>

                <a-col :span="8">
                  <a-flex class="flex">
                    <div class="label">排序</div>
                    <a-input-number
                      size="small"
                      class="w-100"
                      v-model:value="record.sort"
                    ></a-input-number>
                  </a-flex>
                </a-col>
                <a-col :span="8">
                  <a-flex>
                    <div class="label">选项</div>
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
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { optionSelect } from '@/api/modules/system/dict/dict';
import { dictToOptions, formatColumns } from '@/utils/table/table';
import { fieldColumns } from '../data/columns';
import { GenStepEnum, nextStep } from '../data/config';
import { codeFormData } from '../data/data';
import { htmlTypeOptions, javaTypeOptions, queryOptions } from '../data/options';
import CheckboxVue from './components/Checkbox.vue';
import TopTool from './components/TopTool.vue';

const switchKeys = ['isInsert', 'isEdit', 'isList', 'isQuery', 'isRequired', 'isPk'];

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
const next = () => {
  nextStep(GenStepEnum.CODE);
};
const goBack = () => {
  nextStep(GenStepEnum.BASE);
};
</script>

<style lang="scss" scoped>
:deep(.ant-card) {
  box-shadow: none;
}

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
}
:deep(.ant-table-expanded-row-fixed) {
  padding: 0 !important;
}
.field-table {
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  .table-container {
    overflow: auto;
  }
}
</style>

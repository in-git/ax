<template>
  <a-form
    :rules="testRules"
    :model="testForm"
    @finish="submit"
    :label-col="{ span: 6 }"
    label-align="left"
  >
    <a-modal
      :footer="false"
      title="字典类型"
      v-model:open="testShowForm"
      get-container=".system__template"
    >
      <a-card title="编辑/新增" class="form__head">
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
      </a-card>
      <a-card class="mt-8">
        <a-form-item label="文本字段" name="textField">
          <a-input placeholder="请输入文本字段" v-model:value="testForm.textField">
            <template #addonAfter>
              <a-flex :gap="8">
                <a-popover trigger="click" title="快速录入">
                  <BookOutlined />
                  <template #content>
                    <Memo v-model:value="testForm.textField" />
                  </template>
                </a-popover>
              </a-flex>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="数字字段" name="numberField">
          <a-input placeholder="请输入数字字段" v-model:value="testForm.numberField">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="testForm.numberField" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="日期字段" name="dateField">
          <a-date-picker class="w-100"></a-date-picker>
        </a-form-item>
        <a-form-item label="富文本字段" name="richTextField">
          <a-textarea
            placeholder="请输入富文本字段"
            v-model:value="testForm.richTextField"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="下拉框字段" name="selectField">
          <a-select placeholder="请输入下拉框字段" v-model:value="testForm.selectField"></a-select>
        </a-form-item>
        <a-form-item label="布尔字段" name="booleanField">
          <a-input placeholder="请输入布尔字段" v-model:value="testForm.booleanField">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="testForm.booleanField" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="创建时间" name="createTime">
          <a-date-picker class="w-100"></a-date-picker>
        </a-form-item>
        <a-form-item label="更新时间" name="updateTime">
          <a-date-picker class="w-100"></a-date-picker>
        </a-form-item>
        <a-form-item label="文本域" name="textareaField">
          <a-textarea
            placeholder="请输入文本域"
            v-model:value="testForm.textareaField"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="树形选择器" name="treeField">
          <a-input placeholder="请输入树形选择器" v-model:value="testForm.treeField">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="testForm.treeField" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
      </a-card>
    </a-modal>
  </a-form>
</template>

<script setup lang="ts">
import { createTest, updateTest } from '@/api/modules/system/test/test';
import { response } from '@/utils/table/table';
import Memo from '@/views/selector/memo/Memo.vue';
import { testList } from '../../data/curd';
import { testForm, testRules, testShowForm } from '../../data/form';
import {} from '../../data/options';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (testForm.value.testId) {
    await response(updateTest, testForm.value);
  } else {
    await response(createTest, testForm.value);
  }
  await testList();
  loading.value = false;
  testShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>

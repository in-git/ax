<template>
  <a-form
    :rules="typeRules"
    :model="typeForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <a-modal title="字典类型" v-model:open="typeShowForm" get-container=".SystemDict">
      <a-card title="编辑/新增" class="form__head">
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>

        <a-form-item label="字典名称" name="dictName">
          <a-input placeholder="请输入字典名称" v-model:value="typeForm.dictName">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="typeForm.dictName" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="字典类型" name="dictType">
          <a-input placeholder="请输入字典类型" v-model:value="typeForm.dictType"></a-input>
        </a-form-item>
        <a-form-item label="是否启用" name="status">
          <a-radio-group v-model:value="typeForm.status" :options="isOptions"></a-radio-group>
        </a-form-item>
        <a-form-item label="备注" name="remark">
          <a-textarea placeholder="请输入备注" v-model:value="typeForm.remark"></a-textarea>
        </a-form-item>
      </a-card>
    </a-modal>
  </a-form>
</template>

<script setup lang="ts">
import Memo from '@/views/selector/memo/Memo.vue';

import { createType, updateType } from '@/api/modules/system/dict/dict';
import { isOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import { typeList } from '../../data/curd';
import { typeForm, typeRules, typeShowForm } from '../../data/form';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  try {
    if (typeForm.value.dictId) {
      await response(updateType, typeForm.value);
    } else {
      await response(createType, typeForm.value);
    }
    await typeList();
    loading.value = false;
    typeShowForm.value = false;
  } catch (error) {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>

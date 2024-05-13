<template>
  <a-form
    :rules="dataRules"
    :model="dataForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="字典数据" v-model:visible="dataShowForm">
      <a-card title="编辑/新增" class="form__head">
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
        <a-form-item label="字典名称" name="dictLabel">
          <a-input placeholder="请输入字典标签" v-model:value="dataForm.dictLabel">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="dataForm.dictLabel" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="字典编码" name="dictCode">
          <a-input placeholder="请输入字典编码" v-model:value="dataForm.dictCode">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="dataForm.dictCode" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="字典排序" name="dictSort">
          <a-input placeholder="请输入字典排序" v-model:value="dataForm.dictSort">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="dataForm.dictSort" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item label="字典键值" name="dictValue">
          <a-input placeholder="请输入字典键值" v-model:value="dataForm.dictValue">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="dataForm.dictValue" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="字典类型" name="dictType">
          <a-input placeholder="请输入字典类型" v-model:value="dataForm.dictType"></a-input>
        </a-form-item>
        <a-form-item label="表格回显样式" name="listClass">
          <a-input placeholder="请输入表格回显样式" v-model:value="dataForm.listClass">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="dataForm.listClass" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="是否默认" name="isDefault">
          <a-switch
            :checked-value="'Y'"
            :un-checked-value="'N'"
            :options="isOptions"
            v-model:checked="dataForm.isDefault"
          ></a-switch>
        </a-form-item>
        <a-form-item label="状态" name="status">
          <a-radio-group v-model:value="dataForm.status" :options="statusOptions"></a-radio-group>
        </a-form-item>
        <a-form-item label="备注" name="remark">
          <a-textarea placeholder="请输入备注" v-model:value="dataForm.remark"></a-textarea>
        </a-form-item>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createData, updateData } from '@/api/modules/system/dict/dict.data';
import SystemModal from '@/components/modal/SysModal.vue';
import { isOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import Memo from '@/views/selector/memo/Memo.vue';
import { dataList } from '../../data/curd';
import { dataForm, dataRules, dataShowForm } from '../../data/form';
import { statusOptions } from '../../data/options';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (dataForm.value.dictCode) {
    await response(updateData, dataForm.value);
  } else {
    await response(createData, dataForm.value);
  }
  await dataList();
  loading.value = false;
  dataShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>

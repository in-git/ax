<template>
  <a-form
    :model="dictDataForm"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
    label-align="right"
    @finish="submit"
  >
    <SystemModal title="字典数据编辑" v-model:visible="dictDataShowForm">
      <div class="h-100 flex flex-col">
        <div class="flex-1">
          <a-row>
            <a-col :span="8" :offset="9">
              <div class="py-12 text-center">
                <img :src="TeamWork" width="160" />
              </div>
            </a-col>
          </a-row>
          <!-- name="dictType" -->
          <a-form-item label="字典类型" required>
            <a-input v-model:value="dictDataForm.dictType" disabled></a-input>
          </a-form-item>
          <a-form-item label="字典标题" name="dictLabel" required>
            <a-input v-model:value="dictDataForm.dictLabel" placeholder="请输入字典标题"></a-input>
          </a-form-item>
          <a-form-item label="数据键值" name="dictValue" required>
            <a-input v-model:value="dictDataForm.dictValue" placeholder="请输入数据键值"></a-input>
          </a-form-item>
          <a-form-item label="样式属性" name="cssClass" placeholder="请输入样式属性">
            <a-input v-model:value="dictDataForm.cssClass"></a-input>
          </a-form-item>
          <a-form-item label="显示排序" name="dictSort">
            <a-input v-model:value="dictDataForm.dictSort" placeholder="请输入显示排序"></a-input>
          </a-form-item>
          <a-form-item label="状态" name="status" required>
            <a-radio-group
              :options="statusOptions"
              v-model:value="dictDataForm.status"
            ></a-radio-group>
          </a-form-item>
          <a-form-item label="备注">
            <a-textarea
              placeholder="请输入备注信息"
              :auto-size="{
                minRows: 2,
                maxRows: 6,
              }"
              v-model:value="dictDataForm.remark"
            ></a-textarea>
          </a-form-item>

          <FormFooter justify="center"></FormFooter>
        </div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createDictData, updateDictData } from '@/api/modules/system/dict/dict.data';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import TeamWork from '../../assets/TeamWork.png';
import { listDictData } from '../data/curd';
import { dictDataForm, dictDataShowForm } from '../data/form';

const submit = async () => {
  console.log(dictDataForm.value);

  if (!dictDataForm.value.createTime) {
    await response(createDictData, dictDataForm.value);
  } else {
    await response(updateDictData, dictDataForm.value);
  }
  await listDictData();
  dictDataShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>

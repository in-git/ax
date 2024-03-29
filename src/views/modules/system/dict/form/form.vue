<template>
  <a-form
    :model="dictForm"
    :wrapper-col="{ span: 8 }"
    :label-col="{ span: 4, offset: 4 }"
    label-align="left"
    @finish="submit"
  >
    <SystemModal title="字典配置/新增" v-model:visible="showDictFormForm">
      <div class="h-100 flex flex-col">
        <a-row>
          <a-col :span="8" :offset="8">
            <div class="py-12 text-center">
              <img :src="TeamWork" width="160" />
            </div>
          </a-col>
        </a-row>
        <div class="flex-1 p-8">
          <a-form-item label="字典名称" name="dictName" required>
            <a-input v-model:value="dictForm.dictName"></a-input>
          </a-form-item>
          <a-form-item label="字典类型" required name="dictType">
            <a-input v-model:value="dictForm.dictType"></a-input>
          </a-form-item>
          <a-form-item label="状态" required name="status">
            <a-radio-group v-model:value="dictForm.status" :options="statusOptions"></a-radio-group>
          </a-form-item>
          <a-form-item label="备注" name="remark">
            <a-textarea v-model:value="dictForm.remark"></a-textarea>
          </a-form-item>
          <a-row>
            <a-col :span="8" :offset="8">
              <a-button type="primary" htmlType="submit" block>提交</a-button>
            </a-col>
          </a-row>
        </div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createDict, updateDict } from '@/api/modules/system/dict/dict';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import TeamWork from '../assets/TeamWork.png';
import { dictForm, showDictFormForm } from '../data/form';

const submit = async () => {
  if (dictForm.value.dictId) {
    await response(updateDict, dictForm.value);
  } else {
    await response(createDict, dictForm.value);
  }
  showDictFormForm.value = false;
};
</script>

<style lang="scss" scoped></style>

<template>
  <a-modal :footer="false" title="部门" v-model:open="deptShowForm" get-container=".SystemDept">
    <a-form
      :rules="deptRules"
      :model="deptForm"
      @finish="submit"
      :label-col="{ span: 6 }"
      label-align="right"
    >
      <a-card title="编辑/新增" class="form__head">
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="deptTable.loading" block>
            保存
          </a-button>
        </template>
        <a-form-item label="上级部门" name="parentId" v-if="deptForm.deptId !== 100">
          <a-tree-select
            :tree-data="deptTable.data"
            v-model:value="deptForm.parentId"
            :field-names="{ label: 'deptName', value: 'deptId' }"
          ></a-tree-select>
        </a-form-item>

        <a-form-item label="部门名称" name="deptName">
          <a-input placeholder="请输入部门名称" v-model:value="deptForm.deptName">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="deptForm.deptName" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="显示顺序" name="orderNum">
          <a-input placeholder="请输入显示顺序" v-model:value="deptForm.orderNum">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="deptForm.orderNum" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="负责人" name="leader">
          <a-input placeholder="请输入负责人" v-model:value="deptForm.leader">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="deptForm.leader" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="联系电话" name="phone">
          <a-input placeholder="请输入联系电话" v-model:value="deptForm.phone">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="deptForm.phone" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="部门状态" name="status">
          <a-radio-group
            v-model:value="deptForm.status"
            placeholder="请选择部门状态"
            allow-clear
            :options="statusOptions"
          ></a-radio-group>
        </a-form-item>
      </a-card>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { createDept, updateDept } from '@/api/modules/system/dept/dept';
import { response } from '@/utils/table/table';
import Memo from '@/views/selector/memo/Memo.vue';
import { deptList } from '../../data/curd';
import { deptForm, deptRules, deptShowForm } from '../../data/form';
import { statusOptions } from '../../data/options';
import { deptTable } from '../../data/table';

const submit = async () => {
  deptTable.value.loading = true;
  if (deptForm.value.deptId) {
    await response(updateDept, deptForm.value);
  } else {
    await response(createDept, deptForm.value);
  }
  await deptList();
  deptShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>

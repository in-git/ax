<template>
  <a-form
    :rules="deptRules"
    :model="deptForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="部门" v-model:visible="deptShowForm">
      <a-card title="编辑/新增">
        <a-form-item label="父级菜单" name="parentId" v-if="deptForm.parentId !== 0">
          <a-tree-select
            allowClear
            :tree-data="deptTable.data"
            v-model:value="deptForm.parentId"
            :field-names="{ label: 'deptName', value: 'deptId' }"
          ></a-tree-select>
        </a-form-item>
        <a-form-item label="部门名称" name="deptName">
          <a-input placeholder="请输入部门名称" v-model:value="deptForm.deptName"></a-input>
        </a-form-item>
        <a-form-item label="显示顺序" name="orderNum">
          <a-input placeholder="请输入显示顺序" v-model:value="deptForm.orderNum"></a-input>
        </a-form-item>
        <a-form-item label="负责人" name="leader">
          <a-input placeholder="请输入负责人" v-model:value="deptForm.leader"></a-input>
        </a-form-item>
        <a-form-item label="联系电话" name="phone">
          <a-input placeholder="请输入联系电话" v-model:value="deptForm.phone"></a-input>
        </a-form-item>
        <a-form-item label="部门状态" name="status">
          <a-select
            v-model:value="deptForm.status"
            class="w-100"
            placeholder="请选择部门状态"
            allow-clear
            @change="deptList"
            :options="statusOptions"
          ></a-select>
        </a-form-item>
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createDept, updateDept } from '@/api/modules/system/dept/dept';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import { deptList } from '../../data/curd';
import { deptForm, deptRules, deptShowForm } from '../../data/form';
import { statusOptions } from '../../data/options';
import { deptTable } from '../../data/table';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (deptForm.value.deptId) {
    await response(updateDept, deptForm.value);
  } else {
    await response(createDept, deptForm.value);
  }
  await deptList();
  loading.value = false;
  deptShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>

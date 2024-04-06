<template>
  <a-form
    :model="deptForm"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="部门信息编辑" v-model:visible="deptShowForm">
      <div class="h-100 flex flex-col">
        <a-row>
          <a-col :span="8" :offset="9">
            <h2>新增/编辑部门</h2>
          </a-col>
        </a-row>
        <div class="flex-1 p-8">
          <a-form-item label="上级部门" v-if="deptForm.parentId || deptForm.parentId !== 0">
            <a-tree-select
              :tree-data="deptTable.data"
              v-model:value="deptForm.parentId"
              :field-names="{ label: 'deptName', value: 'deptId' }"
            ></a-tree-select>
          </a-form-item>
          <a-form-item label="部门名称">
            <a-input v-model:value="deptForm.deptName"></a-input>
          </a-form-item>
          <a-form-item label="显示排序">
            <a-input v-model:value="deptForm.orderNum"></a-input>
          </a-form-item>
          <a-form-item label="负责人">
            <a-input v-model:value="deptForm.leader"></a-input>
          </a-form-item>
          <a-form-item label="联系电话">
            <a-input v-model:value="deptForm.phone"></a-input>
          </a-form-item>
          <a-form-item label="邮箱">
            <a-input v-model:value="deptForm.email"></a-input>
          </a-form-item>
          <a-form-item label="部门状态">
            <a-input></a-input>
          </a-form-item>
          <a-row>
            <a-col :span="8" :offset="9">
              <a-button type="primary" htmlType="submit" block>保存</a-button>
            </a-col>
          </a-row>
        </div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { deptForm, deptShowForm } from '../data/form';
import { deptTable } from '../data/table';
</script>

<style lang="scss" scoped>
h2 {
  font-weight: bold;
  padding: 12px 0;
}
</style>

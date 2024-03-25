<template>
  <div class="mt-8">
    <a-card v-if="!!currentRole" title="Select Department">
      <a-form :model="currentRole" @finish="submit">
        <a-form-item label="Role name" name="roleName" required>
          <a-input v-model:value="currentRole.roleName" disabled />
        </a-form-item>
        <a-form-item label="Role name" name="roleKey" required>
          <a-input v-model:value="currentRole.roleKey" disabled />
        </a-form-item>
        <a-form-item label="Role name" name="dataScope" required>
          <a-select v-model:value="currentRole.dataScope" :options="scopedOptions" />
        </a-form-item>
        <div class="mb-8 flex gc-8">
          <div class="flex align-center text-12 text-999 gc-4">
            <span>父子关联</span>
            <a-switch v-model:checked="checkStrictly"></a-switch>
          </div>
        </div>
        <a-tree
          multiple
          :tree-data="treeData"
          :field-names="{
            key: 'id',
            title: 'label',
          }"
          :check-strictly="!checkStrictly"
          checkable
          :selectable="false"
          autoExpandParent
          :default-expand-all="true"
          v-model:checked-keys="currentRole.deptIds"
          @check="check"
        ></a-tree>
        <FormFooter />
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { roleDataScope } from '@/api/modules/system/role/role';
import { message } from 'ant-design-vue';
import { currentRole, roleData } from '../../card/data';

const treeData = ref<any>();

const halfExpands = ref<number[]>([]);
const submit = async () => {
  const { data } = await roleDataScope(currentRole.value!);
  message.success(data.msg);
};
const check = (_: any, data: any) => {
  console.log(data.halfCheckedKeys);
};
const checkStrictly = ref(true);
const scopedOptions = [
  {
    value: '1',
    label: '全部数据权限',
  },
  {
    value: '2',
    label: '自定数据权限',
  },
  {
    value: '3',
    label: '本部门数据权限',
  },
  {
    value: '4',
    label: '本部门及以下数据权限',
  },
  {
    value: '5',
    label: '仅本人数据权限',
  },
];
watch(
  roleData,
  () => {
    treeData.value = roleData.value.deptList;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>

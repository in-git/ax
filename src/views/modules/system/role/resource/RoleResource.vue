<template>
  <div class="mt-8">
    <a-card
      v-if="!!currentRole"
      title="Select Department"
      :body-style="{ height: '600px', overflowY: 'auto' }"
    >
      <a-form
        :model="currentRole"
        @finish="submit"
        :label-col="{
          span: 8,
        }"
        :wrapper-col="{
          span: 14,
          offset: 2,
        }"
      >
        <a-form-item label="Role name" name="roleName" required>
          <a-input v-model:value="currentRole.roleName" disabled />
        </a-form-item>
        <a-form-item label="Role perms" name="roleKey" required>
          <a-input v-model:value="currentRole.roleKey" disabled />
        </a-form-item>
        <a-form-item label="Scoped" name="dataScope" required>
          <a-select v-model:value="currentRole.dataScope" :options="scopedOptions" />
        </a-form-item>

        <a-form-item name="deptIds" required :wrapper-col="{ span: 24 }">
          <a-directory-tree
            :tree-data="treeData"
            :field-names="{
              key: 'id',
              title: 'label',
            }"
            :height="360"
            selectable
            autoExpandParent
            :default-expand-all="true"
            v-model:selected-keys="currentRole.deptIds"
            ref="treeRef"
          ></a-directory-tree>
        </a-form-item>
        <FormFooter />
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { roleDataScope } from '@/api/modules/system/role/role';
import { message } from 'ant-design-vue';
import { currentRole, roleData } from '../card/data';

const treeData = ref<any>();
const treeRef = ref();

const submit = async () => {
  if (!currentRole.value) return;
  const treeSelectData: any = currentRole.value.deptIds;
  if (!(currentRole.value.deptIds instanceof Array)) {
    currentRole.value.deptIds = treeSelectData.checked.concat(treeSelectData.halfChecked);
  }
  const { data } = await roleDataScope(currentRole.value);
  message.success(data.msg);
};

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

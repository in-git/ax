<template>
  <div>
    <a-card v-if="!currentRole">
      <a-empty description="Please select a role to preview"></a-empty>
    </a-card>
    <a-form
      v-else
      :model="currentRole"
      @finish="submit"
      layout="vertical"
      class="flex-1 relative h-100 form"
    >
      <a-card title="Base config" class="mt-8">
        <a-form-item label="Role name" name="roleName" required>
          <a-input v-model:value="currentRole.roleName"></a-input>
        </a-form-item>

        <a-form-item label="Sort" name="roleSort" required>
          <a-input-number class="w-100" v-model:value="currentRole.roleSort"></a-input-number>
        </a-form-item>

        <a-form-item label="Perms" name="roleKey" required>
          <a-input class="w-100" v-model:value="currentRole.roleKey"></a-input>
        </a-form-item>

        <a-form-item label="Role name" name="remark" required>
          <a-textarea
            :autoSize="{ minRows: 2, maxRows: 4 }"
            v-model:value="currentRole.remark"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="Status">
          <a-segmented :options="statusOptions" v-model:value="currentRole.status" />
        </a-form-item>
      </a-card>

      <a-card class="mt-8">
        <a-form-item label="分配菜单" :label-col="{ span: 24 }">
          <div class="flex align-center mb-8">
            <span class="text-12 text-999 mr-4">父子关联</span>
            <a-switch v-model:checked="checkStrictly"></a-switch>
          </div>
          <a-card :body-style="{ maxHeight: '450px', overflowY: 'auto' }">
            <a-tree
              :treeData="treeData"
              checkable
              block-node
              :selectable="false"
              v-model:checked-keys="currentRole.menuIds"
              :fieldNames="{
                key: 'id',
                title: 'label',
              }"
              default-expand-parent
              :check-strictly="!checkStrictly"
              ref="treeRef"
            ></a-tree>
          </a-card>
        </a-form-item>
      </a-card>

      <FormFooter class="px-0"></FormFooter>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { createRole, updateRole } from '@/api/modules/system/role/role';
import FormFooter from '@/components/table/form/FormFooter.vue';
import { statusOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { getRoles, resetRoleForm } from '../../card/curd';
import { currentRole, roleData } from '../../card/data';

const treeData = ref<any[]>([]);

const treeRef = ref();
const checkStrictly = ref(true);

const submit = async () => {
  if (currentRole.value) {
    let data: any = currentRole.value.menuIds;
    const halfCheckedKeys: number[] = treeRef.value.halfCheckedKeys;
    let menuIds: number[] = [];
    if (data.checked) {
      menuIds = data.checked.concat(data.halfCheckedKeys || []);
    } else {
      menuIds = currentRole.value.menuIds;
    }
    if (halfCheckedKeys && halfCheckedKeys.length > 0) {
      menuIds = menuIds.concat(halfCheckedKeys);
    }

    menuIds = Array.from(new Set(menuIds));

    if (currentRole.value.roleId) {
      const { data } = await updateRole({
        ...currentRole.value,
        menuIds,
      });
      message.success(data.msg);
    } else {
      const { data } = await createRole(currentRole.value);
      message.success(data.msg);
    }

    await getRoles();
    resetRoleForm();
  }
};
watch(
  roleData,
  () => {
    treeData.value = roleData.value.roleMenus;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.form {
  height: 650px;
  overflow-y: auto;
}
</style>

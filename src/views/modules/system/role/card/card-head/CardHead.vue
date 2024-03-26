<template>
  <div>
    <TableHead title="Role list">
      <div class="flex justify-between">
        <div class="flex gc-4 align-center">
          <a-button type="primary" @click="create">Create</a-button>

          <a-tooltip title="Reload">
            <a-button type="link" @click="getRoles">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>

          <a-input-search
            placeholder="Please enter role name"
            v-model:value="roleQuery.roleName"
            @search="getRoles"
            allow-clear
          ></a-input-search>
          <a-divider type="vertical"></a-divider>
          <a-button type="link" @click="showRoleForm = true" :disabled="!currentRole">
            <EditOutlined />
            编辑
          </a-button>
          <a-button type="link" style="color: orange">
            <ClusterOutlined />
            资源
          </a-button>
          <a-button type="link" style="color: #333">
            <UserAddOutlined />
            分配人员
          </a-button>
        </div>
        <div>
          <a-button
            type="link"
            danger
            @click="delRoles"
            :disabled="!(currentRole && currentRole.roleId)"
          >
            <DeleteOutlined />
            <span class="text-12">Delete</span>
          </a-button>
        </div>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import { roleTreeSelect } from '@/api/modules/system/role/role';
import type { Role } from '@/api/modules/system/role/types';
import { ClusterOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { useCloned } from '@vueuse/core';
import { roleModule, showRoleForm } from '../../info/data';
import { delRoles, getDeptTree, getRoles, resetRoleForm, selectRole } from '../curd';
import { currentRole, roleData, roleQuery } from '../data';

const select = async (item: Role) => {
  currentRole.value = useCloned(item).cloned.value;
  roleModule.value = 'info';
  await selectRole(item.roleId);
  await getDeptTree(item.roleId);
};

const create = async () => {
  const { data } = await roleTreeSelect();
  if (data.data) {
    roleData.value.roleMenus = data.data;
  }
  showRoleForm.value = true;
  resetRoleForm();
};
onMounted(async () => {
  await getRoles();
});
</script>

<style lang="scss" scoped></style>

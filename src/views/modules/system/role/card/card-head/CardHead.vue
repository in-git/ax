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
          <a-tooltip title="编辑">
            <a-button type="link" style="color: #333">
              <EditOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="资源">
            <a-button type="link" style="color: #333">
              <ClusterOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="分配人员">
            <a-button type="link" style="color: #333">
              <UserAddOutlined />
            </a-button>
          </a-tooltip>
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
import { ClusterOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { showRoleForm } from '../../info/data';
import { delRoles, getRoles, resetRoleForm } from '../curd';
import { currentRole, roleData, roleQuery } from '../data';

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

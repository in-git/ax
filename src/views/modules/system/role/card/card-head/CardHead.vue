<template>
  <div>
    <TableHead title="Role list">
      <div class="flex justify-between">
        <div class="flex gc-4 align-center">
          <a-button type="primary" @click="create">
            <PlusOutlined />
          </a-button>

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

          <div class="flex gc-2" :class="[!isActive() ? 'active' : 'gray']">
            <a-tooltip title="编辑">
              <a-button type="text" @click="selectRole()" :disabled="!currentRole">
                <EditOutlined class="icon" />
              </a-button>
            </a-tooltip>
            <a-tooltip title="资源" @click="allocatingResource">
              <a-button type="text" :disabled="!currentRole">
                <ClusterOutlined class="icon" />
              </a-button>
            </a-tooltip>
            <a-tooltip title="分配人员">
              <a-button type="text" :disabled="!currentRole">
                <UserAddOutlined class="icon" />
              </a-button>
            </a-tooltip>
          </div>
        </div>
        <div>
          <a-button type="link" danger @click="delRoles" :disabled="isActive()">
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
import { allocatingResource } from '../../resource/data';
import { delRoles, getRoles, resetRoleForm, selectRole } from '../curd';
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

const isActive = () => {
  return !(currentRole.value && currentRole.value.roleId);
};
</script>

<style lang="scss" scoped>
.gray {
  filter: grayscale(100%);
}
.active {
  .icon {
    color: rgb(29, 110, 18);
  }
}
</style>

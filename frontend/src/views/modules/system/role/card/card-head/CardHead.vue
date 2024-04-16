<template>
  <div>
    <TableHead title="身份列表展示">
      <div class="flex gc-4 align-center">
        <a-button type="primary" @click="create">
          <PlusOutlined />
        </a-button>

        <a-tooltip title="重新加载">
          <a-button type="link" @click="getRoles">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>

        <a-input-search
          placeholder="请输入角色名"
          v-model:value="roleQuery.roleName"
          @search="getRoles"
          allow-clear
        ></a-input-search>

        <a-divider type="vertical"></a-divider>

        <div class="flex gc-2 text-nowrap align-center" :class="[!isActive() ? 'active' : 'gray']">
          <span class="system-subtitle">编辑/权限:</span>
          <a-tooltip title="编辑基础信息">
            <a-button type="text" @click="selectRole()" :disabled="!currentRole">
              <EditOutlined class="icon" />
            </a-button>
          </a-tooltip>
          <a-tooltip title="分配资源" @click="allocatingResource">
            <a-button type="text" :disabled="!currentRole">
              <ClusterOutlined class="icon" />
            </a-button>
          </a-tooltip>
          <a-tooltip title="分配人员">
            <a-button type="text" :disabled="!currentRole" @click="allocateUsers">
              <UserAddOutlined class="icon" />
            </a-button>
          </a-tooltip>
          <a-tooltip title="取消分配">
            <a-button type="text" :disabled="!currentRole" @click="unassignUsers">
              <UserDeleteOutlined class="text-danger" />
            </a-button>
          </a-tooltip>
        </div>
      </div>
      <div>
        <a-button type="link" danger @click="delRoles" :disabled="isActive()">
          <DeleteOutlined />
        </a-button>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import { roleTreeSelect } from '@/api/modules/system/role/role';
import {
  ClusterOutlined,
  DeleteOutlined,
  ReloadOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons-vue';
import { allocateUsers, unassignUsers } from '../../assign/data';
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
../../assign/data

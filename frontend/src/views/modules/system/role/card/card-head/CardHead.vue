<template>
  <div>
    <TableHead title="身份列表展示">
      <div class="flex gc-4 align-center">
        <a-button type="primary" @click="create">
          <PlusOutlined />
        </a-button>

        <a-tooltip title="重新加载">
          <a-button type="link" @click="roleList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>

        <a-input-search
          placeholder="请输入角色名"
          v-model:value="roleQuery.roleName"
          @search="roleList"
          allow-clear
        ></a-input-search>

        <a-divider type="vertical"></a-divider>

        <div class="flex gc-2 text-nowrap align-center" :class="[!isActive() ? 'active' : 'gray']">
          <span class="system__subtitle">编辑/权限:</span>
          <a-tooltip title="编辑基础信息">
            <a-button type="link" @click="selectRole()" :disabled="!currentRole">
              <template #icon>
                <EditOutlined />
              </template>
              基础信息
            </a-button>
          </a-tooltip>

          <a-button type="text" :disabled="!currentRole" @click="allocatingResource">
            分配资源
            <template #icon>
              <ClusterOutlined />
            </template>
          </a-button>

          <a-button type="text" :disabled="!currentRole" @click="allocateUsers">
            分配人员
            <template #icon>
              <UserAddOutlined />
            </template>
          </a-button>

          <a-button type="text" :disabled="!currentRole" @click="unassignUsers">
            取消分配
            <template #icon>
              <UserDeleteOutlined />
            </template>
          </a-button>
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
import { allocatingResource, roleList, selectRole } from '../../data/curd';
import { roleResetForm, showRoleForm } from '../../data/form';
import { delRoles } from '../curd';
import { currentRole, roleData, roleQuery } from '../data';
const create = async () => {
  const { data } = await roleTreeSelect();
  if (data.data) {
    roleData.value.roleMenus = data.data;
  }
  showRoleForm.value = true;
  roleResetForm();
};
onMounted(async () => {
  await roleList();
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

<template>
  <div>
    <a-card title="身份列表展示" :body-style="{ paddingBottom: '8px' }">
      <a-flex :gap="4" :align="'center'" :justify="'space-between'" class="mb-8">
        <a-flex :gap="4">
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
        </a-flex>
        <a-flex>
          <FieldVue :columns="roleColumns" :module-name="roleTable.moduleName" />
          <div v-perm="'system:role:remove'">
            <a-popconfirm
              title="确定要删除吗"
              :disabled="roleKeys.length === 0"
              placement="bottomRight"
              @confirm="delRoles"
            >
              <a-tooltip title="批量删除">
                <a-button danger type="link" :disabled="roleKeys.length === 0">
                  <DeleteOutlined />
                </a-button>
              </a-tooltip>
            </a-popconfirm>
          </div>
          <a-tooltip title="卡片模式" @click="viewMode = 'card'" v-if="viewMode === 'table'">
            <a-button type="link">
              <OrderedListOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="表格模式" @click="viewMode = 'table'" v-else>
            <a-button type="link">
              <AppstoreAddOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>

      <a-flex :gap="2" :align="'center'" class="text-nowrap">
        <a-flex>
          <span class="system__subtitle">编辑/权限:</span>
          <a-tooltip title="编辑基础信息">
            <a-button type="link" @click="selectRole()" :disabled="roleKeys.length !== 1">
              <template #icon>
                <EditOutlined />
              </template>
              基础信息
            </a-button>
          </a-tooltip>

          <a-button type="text" :disabled="roleKeys.length !== 1" @click="allocatingResource">
            分配资源
            <template #icon>
              <ClusterOutlined />
            </template>
          </a-button>

          <a-button type="text" :disabled="roleKeys.length !== 1" @click="allocateUsers">
            分配人员
            <template #icon>
              <UserAddOutlined />
            </template>
          </a-button>

          <a-button type="text" :disabled="roleKeys.length !== 1" @click="unassignUsers">
            取消分配
            <template #icon>
              <UserDeleteOutlined />
            </template>
          </a-button>
        </a-flex>
      </a-flex>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { roleTreeSelect } from '@/api/modules/system/role/role';
import FieldVue from '@/views/components/table/Field.vue';
import {
  ClusterOutlined,
  DeleteOutlined,
  ReloadOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons-vue';
import { allocateUsers, unassignUsers } from '../../assign/data';
import { roleColumns } from '../../data/column';
import { allocatingResource, delRoles, roleList, selectRole } from '../../data/curd';
import { roleForm, roleResetForm, showRoleForm } from '../../data/form';
import { roleKeys, roleMenus, roleQuery, roleTable, viewMode } from '../../data/table';

const create = async () => {
  const { data } = await roleTreeSelect();
  if (data.data) {
    roleMenus.value = data.data;
  }
  showRoleForm.value = true;
  roleResetForm();
};
onMounted(async () => {
  await roleList();
});

const isActive = () => {
  return !(roleForm.value && roleForm.value.roleId);
};
</script>

<style lang="scss" scoped></style>

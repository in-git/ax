<template>
  <div class="role-card">
    <TableHead title="Role list">
      <div class="flex justify-between">
        <a-button type="primary" @click="create">Create</a-button>
        <div>
          <a-button type="link" danger @click="delRoles">
            <span class="text-12">Delete</span>
          </a-button>
        </div>
      </div>
    </TableHead>
    <div class="card-list">
      <ul>
        <li
          v-for="item in roleData.data"
          :class="{ active: currentRole?.roleId === item.roleId }"
          @click="select(item)"
          class="flex gc-12"
        >
          <img :src="rolePng" width="24" height="24" />
          <div>
            <div class="text-14">
              {{ item.roleName }}
            </div>
            <div class="desc mt-8">
              {{ item.remark }}
            </div>
          </div>
        </li>
      </ul>
      <a-divider dashed>
        <span class="text-999 text-12">No more</span>
      </a-divider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { roleTreeSelect } from '@/api/modules/system/role/role';
import type { Role } from '@/api/modules/system/role/types';
import rolePng from '@/assets/system/role.png';
import { useCloned } from '@vueuse/core';
import { delRoles, getDeptTree, getRoles, selectRole } from './curd';
import { currentRole, roleData, roleObject } from './data';
const select = async (item: Role) => {
  currentRole.value = useCloned(item).cloned.value;
  await selectRole(item.roleId);
  await getDeptTree(item.roleId);
};

const create = async () => {
  const { data } = await roleTreeSelect();
  if (data.data) {
    roleData.value.roleMenus = data.data;
  }

  currentRole.value = {
    ...roleObject,
  };
};
onMounted(async () => {
  await getRoles();
});
</script>

<style lang="scss" scoped>
@import './style';
</style>

<template>
  <div class="role-card">
    <CardHead />
    <div class="card-list">
      <a-spin :spinning="roleSpinning">
        <ul>
          <li
            v-for="item in roleData.data"
            :class="{ active: currentRole?.roleId === item.roleId }"
            @click="select(item)"
            class="flex gc-12"
            @dblclick="open"
          >
            <img :src="rolePng" width="32" height="32" />
            <div>
              <div class="text-14">
                {{ item.roleName }}
              </div>
              <div class="desc mt-8 text-12">
                {{ item.remark }}
              </div>
            </div>
          </li>
        </ul>
      </a-spin>

      <a-divider dashed>
        <span class="text-999 text-12">No more</span>
      </a-divider>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Role } from '@/api/modules/system/role/types';
import rolePng from '@/assets/system/role.png';
import { useCloned } from '@vueuse/core';
import { roleModule, showRoleForm } from '../info/data';
import CardHead from './card-head/CardHead.vue';
import { getDeptTree, getRoles, selectRole } from './curd';
import { currentRole, roleData, roleSpinning } from './data';
const select = async (item: Role) => {
  currentRole.value = useCloned(item).cloned.value;
  roleModule.value = 'info';
  await selectRole(item.roleId);
  await getDeptTree(item.roleId);
};
const open = () => {
  showRoleForm.value = true;
};
onMounted(async () => {
  await getRoles();
});
</script>

<style lang="scss" scoped>
@import './style';
</style>

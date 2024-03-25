<template>
  <div class="role-card">
    <TableHead title="Role list">
      <a-button type="primary">Create</a-button>
    </TableHead>
    <div class="card-list">
      <ul>
        <li
          v-for="item in roleData.data"
          :class="{ active: currentRole?.roleId === item.roleId }"
          @click="selectRole(item)"
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
import type { Role } from '@/api/modules/system/role/types';
import rolePng from '@/assets/system/role.png';
import { currentRole, getRoles, roleData } from './data';

const selectRole = (item: Role) => {
  currentRole.value = item;
};
onMounted(async () => {
  await getRoles();
});
</script>

<style lang="scss" scoped>
@import './style';
</style>

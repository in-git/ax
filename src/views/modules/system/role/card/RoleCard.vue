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
            @dblclick="selectRole(item.roleId)"
            class="text-center"
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
import CardHead from './card-head/CardHead.vue';
import { getRoles, selectRole } from './curd';
import { currentRole, roleData, roleSpinning } from './data';
const select = (item: Role) => {
  currentRole.value = useCloned(item).cloned.value;
};
onMounted(async () => {
  await getRoles();
});
</script>

<style lang="scss" scoped>
@import './style';
</style>

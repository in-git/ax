<template>
  <a-card class="role-card">
    <CardHead />
    <div class="card-list">
      <a-spin :spinning="roleSpinning">
        <a-row :gutter="16" wrap>
          <a-col
            :span="6"
            v-for="item in roleData.data"
            @click="select(item)"
            @dblclick="selectRole(item.roleId)"
          >
            <a-card :class="{ active: currentRole?.roleId === item.roleId }">
              <template #title>
                <a-flex :align="'center'">
                  <img :src="getGiteeImage(`image-icon/role.png`)" width="24" height="24" />
                  <span class="ml-8">
                    {{ item.roleName }}
                  </span>
                </a-flex>
              </template>
              {{ item.remark || '没有描述' }}
            </a-card>
          </a-col>
        </a-row>
      </a-spin>

      <a-divider dashed>
        <span class="system__subtitle">没有更多了</span>
      </a-divider>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemRole } from '@/api/modules/system/role/types';

import { getGiteeImage } from '@/api/utils/image';
import { useCloned } from '@vueuse/core';
import { selectRole } from '../data/curd';
import CardHead from './card-head/CardHead.vue';
import { getRoles } from './curd';
import { currentRole, roleData, roleSpinning } from './data';

const select = (item: SystemRole) => {
  currentRole.value = useCloned(item).cloned.value;
};
onMounted(async () => {
  await getRoles();
});
</script>

<style lang="scss" scoped>
.role-card {
  flex: 1;
  border-right: 1px solid #ddd;
  height: 100%;
  $wh: 144px;
}
.active {
  border: 1px solid var(--primary) !important;
  color: #111 !important;
}
</style>

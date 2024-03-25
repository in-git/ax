<template>
  <div>
    <a-card title="Role">
      <a-segmented v-model:value="value" :options="roles">
        <template #label="{ value: val, payload = {} }">
          <div style="padding: 4px 4px">
            <div>
              <img :src="role" width="32" alt="" />
            </div>
            <div class="text-12">{{ payload.name }}</div>
          </div>
        </template>
      </a-segmented>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import role from '@/assets/system/role.png';
import { userRoles } from '../data';
const value = ref();

const roles = computed(() => {
  return userRoles.value.map(e => {
    return {
      value: e.roleId,
      payload: {
        name: e.roleName,
      },
    };
  });
});
</script>

<style lang="scss" scoped></style>

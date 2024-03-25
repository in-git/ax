<template>
  <div class="role-info p-8 flex flex-col">
    <a-segmented
      v-model:value="currentModule"
      :options="modules"
      @change="change"
      size="small"
      :disabled="!currentRole"
    >
      <template #label="{ value: val, payload }">
        <div style="padding: 4px 4px" class="flex gc-4">
          <div>
            <img :src="payload.image" width="16" alt="" />
          </div>
          <div>{{ payload.title }}</div>
        </div>
      </template>
    </a-segmented>
    <RoleInfo v-if="currentModule === 'info'" />
    <RoleResource v-else-if="currentModule === 'resource'" />
    <RoleUsers v-else-if="currentModule === 'users'" />
  </div>
</template>

<script setup lang="ts">
import type { SegmentedValue } from 'ant-design-vue/es/segmented/src/segmented';
import { currentRole } from '../card/data';
import resourcePng from './assets/resource.png';
import rolePng from './assets/role.png';
import usersPng from './assets/users.png';
import RoleInfo from './info/RoleInfo.vue';
import RoleResource from './resource/RoleResource.vue';
import RoleUsers from './users/RoleUsers.vue';

const currentModule = ref<string>('info');

const change = (value: SegmentedValue) => {
  currentModule.value = value.toString();
};
const modules = ref([
  {
    value: 'info',
    payload: {
      title: 'Info',
      image: rolePng,
    },
  },
  {
    value: 'resource',
    payload: {
      title: 'Resource',
      image: resourcePng,
    },
  },
  {
    value: 'user',
    payload: {
      title: 'User',
      image: usersPng,
    },
  },
]);
</script>

<style lang="scss" scoped>
.role-info {
  flex-basis: 200px;
  height: 100%;
  background: #f7fafc;
}
::v-deep(.ant-form-item) {
  margin-bottom: 18px;
}
</style>

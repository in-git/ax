<template>
  <div class="role system-module flex">
    <RoleCard />
    <a-drawer
      :bodyStyle="{ padding: '0' }"
      :headerStyle="{ padding: '8px 4px' }"
      v-model:open="showRoleForm"
      :getContainer="false"
      closable
      title="Role config"
    >
      <RoleInfo />
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import 'splitpanes/dist/splitpanes.css';
import RoleCard from './card/RoleCard.vue';
import { showRoleForm } from './info/data';
import RoleInfo from './info/RoleInfo.vue';
</script>

<style lang="scss" scoped>
::v-deep(.splitpanes) {
  background: white !important;
}

::v-deep(.splitpanes__splitter) {
  width: 2px !important;
  background: var(--primary) !important;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &::before,
  &::after {
    display: none;
  }
}
</style>

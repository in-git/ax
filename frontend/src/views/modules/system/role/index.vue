<template>
  <div class="role system__module flex">
    <RoleCard />
    <RoleInfo />
    <RoleResource />
    <RoleAssign />
  </div>
</template>

<script setup lang="ts">
import 'splitpanes/dist/splitpanes.css';
import RoleAssign from './assign/RoleAssign.vue';
import RoleCard from './card/RoleCard.vue';
import RoleInfo from './info/RoleInfo.vue';
import RoleResource from './resource/RoleResource.vue';
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

<template>
  <div class="role system-module flex">
    <RoleCard />
    <RoleInfo />
  </div>
</template>

<script setup lang="ts">
import 'splitpanes/dist/splitpanes.css';
import RoleCard from './card/RoleCard.vue';
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

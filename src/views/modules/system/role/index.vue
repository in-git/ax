<template>
  <div class="role system-module flex">
    <splitpanes vertical style="height: 100%">
      <pane min-size="20" size="70">
        <RoleCard />
      </pane>
      <pane size="30" minSize="30" maxSize="50">
        <RoleInfo />
      </pane>
    </splitpanes>
  </div>
</template>

<script setup lang="ts">
import RoleCard from './card/RoleCard.vue';
import RoleInfo from './info/RoleInfo.vue';

import { Pane, Splitpanes } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
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

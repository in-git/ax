<template>
  <a-card class="system__module">
    <FolderHead></FolderHead>
    <Splitpanes class="default-theme">
      <pane :size="30" min-size="20">
        <FolderPath></FolderPath>
      </pane>
      <pane :size="70" min-size="40">
        <FolderContent></FolderContent>
      </pane>
    </Splitpanes>
  </a-card>
</template>

<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import FolderContent from './content/FolderContent.vue';
import FolderHead from './head/FolderHead.vue';
import FolderPath from './path/FolderPath.vue';
</script>

<style lang="scss" scoped>
.system__module {
  :deep(.ant-card-body) {
    height: 100%;
    padding: 0;
  }
}

:deep(.splitpanes) {
  height: calc(100% - 32px);
  .splitpanes__splitter {
    width: 2px !important;
    background: transparent;
    // &::before {
    //   display: none !important;
    // }
    // &::after {
    //   display: none !important;
    // }
  }
  .splitpanes__pane {
    background: transparent;
  }
}
</style>

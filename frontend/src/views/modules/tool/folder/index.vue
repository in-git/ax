<template>
  <a-card class="system__module">
    <FolderHead></FolderHead>
    <Splitpanes class="default-theme flex-1">
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
import { getSys } from './data/action';
import FolderHead from './head/FolderHead.vue';
import FolderPath from './path/FolderPath.vue';
onMounted(async () => {
  getSys();
});
</script>

<style lang="scss" scoped>
.system__module {
  // overflow-y: hidden;
  height: 100%;
  :deep(.ant-card-body) {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
.default-theme {
  flex: 1;
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

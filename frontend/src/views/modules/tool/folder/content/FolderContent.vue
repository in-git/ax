<template>
  <div class="folder-content" @drop="drop" @dragover="dragover">
    <Tool></Tool>
    <div style="height: calc(100% - 60px)">
      <template v-if="mode === 'card'">
        <Card></Card>
      </template>
      <template v-else>
        <Table></Table>
      </template>
    </div>
    <FooterVue />
  </div>
</template>

<script setup lang="ts">
import { mode } from '../data/data';
import Card from './subnodes/Card.vue';
import FooterVue from './subnodes/footer/Footer.vue';
import Table from './subnodes/Table.vue';
import Tool from './subnodes/tool/Tool.vue';

const dragover = (e: DragEvent) => {
  e.preventDefault();
};
const drop = (e: DragEvent) => {
  e.preventDefault();
  console.log('drop');
};
</script>

<style lang="scss" scoped>
.folder-content {
  flex: 1;
  height: 100%;
}
</style>

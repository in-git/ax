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
import type { UploadFile } from './subnodes/data/types';
import { uploadFiles } from './subnodes/data/upload';
import FooterVue from './subnodes/footer/Footer.vue';
import Table from './subnodes/Table.vue';
import Tool from './subnodes/tool/Tool.vue';

const dragover = (e: DragEvent) => {
  e.preventDefault();
};

const drop = async (e: DragEvent) => {
  e.preventDefault();
  const dataTransfer = e.dataTransfer;
  let files: UploadFile[] = [];

  const traverseFileTree = async (item: any, path = '') => {
    return new Promise<void>((resolve, reject) => {
      if (item.isFile) {
        item.file((file: File) => {
          files.push({
            file,
            path: `${path}/${file.name}`,
          });
          resolve();
        });
      } else if (item.isDirectory) {
        const dirReader = item.createReader();
        dirReader.readEntries(async (entries: any) => {
          for (let i = 0; i < entries.length; i++) {
            await traverseFileTree(entries[i], `${path}/${item.name}`);
          }
          resolve();
        }, reject);
      }
    });
  };

  if (dataTransfer && dataTransfer.items) {
    await Promise.all(
      Array.from(dataTransfer.items).map(async f => {
        const entry = f.webkitGetAsEntry();
        if (!entry) return;
        if (!entry.isFile) {
          await traverseFileTree(entry);
        } else {
          f.getAsFile() && files.push({ file: f.getAsFile()!, path: entry.fullPath });
        }
      }),
    );
  }

  uploadFiles(files);
};
</script>

<style lang="scss" scoped>
.folder-content {
  flex: 1;
  height: 100%;
}
</style>

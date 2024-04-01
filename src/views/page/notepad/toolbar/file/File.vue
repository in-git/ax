<template>
  <div class="flex align-center">
    <a-dropdown trigger="click">
      <div class="menu-button">文件(F)</div>
      <template #overlay>
        <a-menu :items="menuList"></a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import notepadPng from '@/assets/system/notepad.png';
import { getData, openWindow, setAttr } from '@/global/config/window';
import { toText } from '@/utils/file/file';
import { useFileSystemAccess } from '@vueuse/core';
import { message } from 'ant-design-vue';
import { nanoid } from 'nanoid';
import NotepadVue from '../../Notepad.vue';
import type { NotepadInjectData } from '../../types';

const parentData = inject<NotepadInjectData>('data')!;
const {
  isSupported,
  data,
  file,
  fileName,
  fileMIME,
  fileSize,
  fileLastModified,
  create,
  open,
  save,
  saveAs,
  updateData,
} = useFileSystemAccess({
  types: [
    {
      description: 'text',
      accept: {
        'text/plain': ['.txt', '.html'],
      },
    },
  ],
  excludeAcceptAllOption: true,
});

const supported = () => {
  if (!isSupported.value) {
    message.warn('当前环境不支持FileSystemAccessAPI,只能在本地或https环境下运行');
    return false;
  }
  return true;
};
const menuList = [
  {
    key: '1-1',
    label: '新建(N)',
    onClick: () => {
      openWindow({
        component: markRaw(NotepadVue),
        title: '记事本',
        id: `notepad${nanoid(8)}`,
        icon: notepadPng,
      });
    },
  },
  /* 打开 */
  {
    key: '2',
    label: '打开(O)',
    onClick: async () => {
      if (!supported()) {
        return;
      }
      await open();
      if (file.value) {
        const data = await toText(file.value);
        if (!parentData) return;
        setAttr(parentData.id, 'data', {
          content: data,
          editorType: parentData.editorType,
        });
      }
    },
  },
  /* 保存 */
  {
    key: '3',
    label: '保存 (S)',
    async onClick() {
      if (!supported()) {
        return;
      }
      const textData = getData(parentData.id);
      console.log(parentData);

      data.value = textData.content;
      await save();
    },
  },
  /* 另存为 */
  {
    key: '4',
    label: '另存为(A)',
    async onClick() {
      if (!supported()) {
        return;
      }
      await saveAs({
        suggestedName: 'Untitled.txt',
      });
    },
  },
];
</script>

<style lang="scss" scoped>
@import '../common';
</style>

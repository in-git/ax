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
import { supportSuffix } from './data';

const notepadId = inject<string>('data')!;
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
        'text/plain': supportSuffix,
      },
    },
  ],
  excludeAcceptAllOption: false,
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
    key: '1-2',
    label: '打开(O)',
    onClick: async () => {
      if (!supported()) {
        return;
      }
      await open();
      if (file.value) {
        const data = await toText(file.value);

        if (!notepadId) return;
        setAttr(notepadId, 'data', data);
      }
    },
  },
  /* 保存 */
  {
    key: '1-3',
    label: '保存 (S)',
    async onClick() {
      if (!supported()) {
        return;
      }
      const text = getData(notepadId);
      data.value = text;
      await save();
    },
  },
  /* 另存为 */
  {
    key: '1-4',
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
  /* 清空 */
  {
    key: '1-5',
    label: '清空(L)',
    onClick() {
      if (!notepadId) return;
      setAttr(notepadId, 'data', '');
    },
  },
];
</script>

<style lang="scss" scoped>
@import '../common';
</style>

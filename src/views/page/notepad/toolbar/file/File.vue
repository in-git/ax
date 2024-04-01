<template>
  <div class="flex align-center">
    <a-dropdown trigger="click">
      <div class="menu">文件(F)</div>
      <template #overlay>
        <a-menu :items="menuList"></a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import notepadPng from '@/assets/system/notepad.png';
import { openWindow, windowList } from '@/global/config/window';
import { toText } from '@/utils/file/file';
import { useFileSystemAccess } from '@vueuse/core';
import { message } from 'ant-design-vue';
import { nanoid } from 'nanoid';
import NotepadVue from '../../Notepad.vue';

interface InjectData {
  id: string;
  editorType: string;
}
const parentData = inject<InjectData>('data');
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
        windowList.value = windowList.value.map(e => {
          if (e.id === parentData.id) {
            e.data = {
              content: data,
              editorType: parentData.editorType,
            };
          }
          return e;
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
      await save({
        suggestedName: 'Untitled.txt',
      });
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
.menu {
  border: 1px solid transparent;
  width: fit-content;
  cursor: default;
  padding: 4px;
  user-select: none;
  &:hover {
    border-bottom: 1px solid #7ba4da;
    background: #7ba4da15;
  }
}
</style>

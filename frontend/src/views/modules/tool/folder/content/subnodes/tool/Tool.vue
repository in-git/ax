<template>
  <div class="tool-container">
    <a-flex class="tool w-100" :justify="'space-between'" :align="'center'">
      <a-flex :gap="4">
        <UploadButton />
        <a-dropdown trigger="click">
          <a-button :disabled="!currentPath">
            新建
            <DownOutlined class="text-8" />
          </a-button>
          <template #overlay>
            <a-flex :gap="4" vertical class="dropdown">
              <a-button
                type="text"
                @click="openModal(item)"
                v-for="item in fileTypeOptions"
                :key="item.type"
              >
                {{ item.name }}
              </a-button>
            </a-flex>
          </template>
        </a-dropdown>
        <a-button @click="loadPath()">
          <ReloadOutlined />
        </a-button>
      </a-flex>

      <a-flex :gap="4">
        <a-button :disabled="selectedFolders.length !== 1" @click="updateName">重命名</a-button>

        <a-tooltip title="复制">
          <a-button @click="copyFile" :disabled="selectedFolders.length === 0">
            <CopyOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="粘贴">
          <a-button @click="pasteFile" :disabled="copiedPaths.length === 0">
            <SnippetsOutlined />
          </a-button>
        </a-tooltip>
        <a-popconfirm
          :disabled="selectedFolders.length === 0"
          title="确认删除这些文件（夹）吗"
          @confirm="delFile"
          placement="bottom"
        >
          <a-button :disabled="selectedFolders.length === 0">
            <DeleteOutlined />
          </a-button>
        </a-popconfirm>
        <a-tooltip title="卡片模式" v-if="mode === 'card'">
          <a-button @click="mode = 'table'">
            <OrderedListOutlined />
          </a-button>
        </a-tooltip>

        <a-tooltip title="表格模式" v-else>
          <a-button @click="mode = 'card'">
            <AppstoreAddOutlined />
          </a-button>
        </a-tooltip>
      </a-flex>
    </a-flex>
    <a-modal
      width="340px"
      centered
      get-container=".tool-container"
      v-model:open="createModal"
      title="新建文件"
      :footer="false"
    >
      <a-card :body-style="{ padding: '16px' }">
        <a-form :model="newFileForm" class="pb-24" @finish="submit" layout="vertical">
          <a-form-item
            label="新的文件名"
            :required="updateMode === 'update'"
            name="newName"
            v-if="updateMode === 'update'"
          >
            <input autofocus v-model="newFileForm.newName" v-focus v-input-select class="w-100" />
          </a-form-item>
          <a-form-item label="文件名" required name="name" v-else>
            <a-input v-model:value="newFileForm.name"></a-input>
          </a-form-item>
          <a-button type="primary" htmlType="submit" :loading="loading" block>保存</a-button>
        </a-form>
      </a-card>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { clonedFiles, createFile, renameFile } from '@/api/modules/tool/file/file';
import { response } from '@/utils/table/table';
import { SnippetsOutlined } from '@ant-design/icons-vue';
import { useCloned } from '@vueuse/core';
import { message } from 'ant-design-vue';
import { delFile, getSeparator, loadPath } from '../../../data/action';
import { copiedPaths, currentPath, mode, selectedFolders } from '../../../data/data';
import UploadButton from './UploadButton.vue';
import { fileTypeOptions } from './options';
import type { FileOptions } from './types';

const createModal = ref(false);
const loading = ref(false);
const updateMode = ref<'update' | 'create'>();

const newFileForm = ref<FileOptions>({
  type: 'folder',
  name: '',
  newName: '',
});

const resetForm = () => {
  newFileForm.value = {
    type: 'folder',
    name: '',
    newName: '',
  };
};

const updateName = () => {
  updateMode.value = 'update';
  const file = selectedFolders.value[0];
  if (file) {
    createModal.value = true;
    const getName = file.toString().split(getSeparator()).pop();
    if (getName) {
      newFileForm.value.name = getName;
      newFileForm.value.newName = getName;
    }
  }
};

const copyFile = () => {
  copiedPaths.value = useCloned(selectedFolders.value).cloned.value;
  message.success('已复制');
};

const pasteFile = async () => {
  if (copiedPaths.value.length === 0) return;
  await clonedFiles(
    currentPath.value,
    copiedPaths.value.map(e => `${e}`),
  );
  await loadPath();
};
const openModal = (item: FileOptions) => {
  resetForm();
  updateMode.value = 'create';
  createModal.value = true;
  newFileForm.value.type = item.type;
};

const submit = async () => {
  loading.value = true;
  try {
    if (updateMode.value === 'create') {
      const path = `${currentPath.value}/${newFileForm.value.name}`;
      await response(createFile, path, newFileForm.value.type);
    } else {
      const newName = `${currentPath.value}\\${newFileForm.value.name}`;
      const oldName = `${currentPath.value}\\${newFileForm.value.newName!}`;
      await response(renameFile, newName, oldName);
    }
    await loadPath();
    loading.value = false;
    createModal.value = false;
    resetForm();
  } catch (error) {
    createModal.value = false;
  }
};
</script>

<style lang="scss" scoped>
.tool {
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  height: 32px;
  padding: 0 8px;
}
.custom-button {
  border-radius: var(--radius);
  border: 1px solid #dddddddd;
  padding: 0 8px;
  cursor: pointer;
  background: none;
}
input {
  border: 1px solid #ddd;
  border-radius: var(--radius);
  outline: none;
}
</style>

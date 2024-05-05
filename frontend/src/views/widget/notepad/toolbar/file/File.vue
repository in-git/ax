<template>
  <div>
    <a-dropdown trigger="click">
      <div class="menu-button" accesskey="f">文件(F)</div>
      <template #overlay>
        <a-card
          :body-style="{ padding: '0' }"
          :bordered="false"
          class="card__container"
          :loading="loading"
        >
          <a-menu :items="menuList" style="width: 120px"></a-menu>
        </a-card>
      </template>
    </a-dropdown>
  </div>

  <SystemModal w="300px" h="260px" v-model:visible="visible" title="保存记事本" position="fixed">
    <a-form @finish="saveText" layout="vertical" :model="form" class="p-12">
      <a-form-item label="记事本标题" name="title" required>
        <a-input :maxlength="16" placeholder="请输入标题" v-model:value="form.title" />
      </a-form-item>
      <a-form-item label="描述信息" name="description" required>
        <a-input placeholder="请输入描述信息" v-model:value="form.description" />
      </a-form-item>
      <div class="mt-8 w-100">
        <a-button html-type="submit" block type="primary">保存</a-button>
      </div>
    </a-form>
  </SystemModal>
</template>

<script setup lang="ts">
import { createMemo } from '@/api/modules/system/memo/memo';
import { getStaticImage } from '@/api/utils/image';
import SystemModal from '@/components/modal/SysModal.vue';
import { getData, openWindow } from '@/global/window/window';
import { response } from '@/utils/table/table';
import { nanoid } from 'nanoid';
import NotepadVue from '../../Notepad.vue';

const notepadId = inject<string>('data')!;
const visible = ref(false);
const loading = ref(false);
const form = ref({
  title: '',
  description: '',
});

const menuList = [
  {
    key: '1-1',
    label: '新建',
    onClick: () => {
      openWindow({
        component: markRaw(NotepadVue),
        title: '记事本',
        id: `notepad${nanoid(8)}`,
        icon: getStaticImage('image-icon/notepad.png'),
      });
    },
  },
  {
    key: '1-2',
    label: '保存',
    onClick: () => {
      const textContent = getData(notepadId);
      if (textContent) {
        visible.value = true;
      }
    },
  },
];

const saveText = async () => {
  const textContent = getData(notepadId);
  await response(createMemo, {
    title: form.value.title,
    value: textContent,
    description: form.value.description,
    type: '2',
  });
  visible.value = false;
};
</script>

<style lang="scss" scoped>
@import '../common';
</style>

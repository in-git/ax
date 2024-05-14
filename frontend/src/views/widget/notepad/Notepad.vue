<template>
  <a-card class="system__module system__notepad" :body-style="{ height: '100%' }">
    <ToolbarVue :allow-save="data?.allowSave">
      <a-dropdown trigger="click">
        <div class="menu-button">模式切换</div>
        <template #overlay>
          <a-menu v-model:selected-keys="mode">
            <a-menu-item :key="item.key" v-for="item in items" @click="mode = [item.key]">
              {{ item.label }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </ToolbarVue>

    <a-card
      :body-style="{ padding: '0', height: '100%' }"
      style="height: calc(100% - 32px)"
      class="relative"
    >
      <textarea v-if="mode.includes('text')" v-model="content" v-focus @input="onChange"></textarea>
      <QuillEditor
        :style="{ height: 'calc(100% - 42px)' }"
        contentType="html"
        v-model:content="content"
        v-else-if="mode.includes('rich-text')"
      />
      <MdPreview
        previewTheme="default"
        :modelValue="content"
        v-else-if="mode.includes('markdown')"
      />
      <div class="count">字数 {{ content.length }}</div>
    </a-card>
  </a-card>
</template>

<script setup lang="ts">
import { setAttr } from '@/global/window/window';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import ToolbarVue from './toolbar/Toolbar.vue';
import type { NotepadViewMode } from './types';

const mode = ref<NotepadViewMode[]>(['text']);

type Items = {
  key: NotepadViewMode;
  label: string;
};
const items: Items[] = [
  {
    label: '纯文本',
    key: 'text',
  },
  {
    label: '富文本',
    key: 'rich-text',
  },
  {
    label: 'Markdown[预览]',
    key: 'markdown',
  },
];

type Props = {
  // 内容;
  data: string;
  /* 保存，用于修改文件 */
  allowSave?: boolean;
  /* 模式 */
  mode?: NotepadViewMode;
};

const props = defineProps<{
  data?: Props;
  id: string;
  mode?: NotepadViewMode;
}>();

const content = ref<string>('');

provide('data', props.id || '');

watch(
  props,
  () => {
    if (!props.data) return;
    content.value = props.data.data || '';
    mode.value = [props.data.mode || 'text'];
  },
  {
    deep: true,
    immediate: true,
  },
);

const onChange = () => {
  setAttr(props.id, 'data', content.value);
};
</script>

<style lang="scss" scoped>
@import './toolbar/common.scss';
textarea {
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  background: linear-gradient(transparent 95%, #585c5c4b 0);
  line-height: 26px;
  background-size: 100% 26px;
  background-attachment: local; /*  这里需要根据 textarea 的内容进行滚动 */
  /* textarea样式修改 */
  width: 100%;
  word-break: break-all;
  overflow-x: hidden;
  white-space: pre-wrap;
}
.count {
  position: absolute;
  bottom: 0;
  right: 0;
  background-image: var(--linear-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
}
</style>

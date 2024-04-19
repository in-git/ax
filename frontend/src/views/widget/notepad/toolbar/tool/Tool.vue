<template>
  <div class="tools flex gc-4">
    <a-dropdown trigger="click">
      <div class="menu-button">工具</div>
      <template #overlay>
        <a-menu :items="items"></a-menu>
      </template>
    </a-dropdown>
    <a-button @click="ai" :disabled="loading">
      <div class="menu-button">AI一下</div>
    </a-button>

    <a-modal centered title="二维码" v-model:open="qrModal" getContainer=".system__notepad">
      <a-flex class="w-100 flex h-100 flex-s">
        <a-qrcode :value="qrText" />
      </a-flex>
    </a-modal>
    <a-modal
      centered
      title="AI处理结果"
      width="600px"
      v-model:open="aiModal"
      getContainer=".system__notepad"
    >
      <a-card class="md-card">
        <MdPreview previewTheme="default" :modelValue="aiText" />
      </a-card>
      <template #footer>
        <a-button type="ghost" @click="append">追加</a-button>
        <a-button type="primary" @click="cover">覆盖</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { qfMsg } from '@/api/external/qian-fan/qian-fan';
import { getData, setData } from '@/global/config/window';
import { QrcodeOutlined, RetweetOutlined } from '@ant-design/icons-vue';
import { message, type ItemType } from 'ant-design-vue';
import { MdPreview } from 'md-editor-v3';

const qrModal = ref(false);
const aiModal = ref(false);
const loading = ref(false);
const aiText = ref('');
const notepadId = inject<string>('data')!;

const qrText = computed(() => {
  return getData(notepadId) || '';
});

const ai = async () => {
  try {
    const content = getData(notepadId);
    if (content.length > 1000) {
      message.warn('字数超过1000');
      return;
    }
    loading.value = true;
    message.success('正在响应');
    const { data } = await qfMsg([
      {
        role: 'user',
        content,
      },
    ]);
    aiModal.value = true;
    aiText.value = data.result;
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};
const cover = () => {
  setData(notepadId, aiText.value);
};
const append = () => {
  const oldText = getData(notepadId);
  setData(notepadId, oldText + aiText.value);
};
const items: ItemType[] = [
  {
    label: '字符串反转',
    key: '3-1',
    onClick() {
      const text = getData(notepadId);
      if (text) {
        const result = text.split('').reverse().join('');
        setData(notepadId, result);
      }
    },
    icon: h(RetweetOutlined),
  },
  /* 编程工具 */
  {
    label: '转二维码',
    key: '3-2',
    onClick() {
      const text = getData(notepadId);
      if (!text) return;
      if (text.length > 300) {
        message.warn('文本内容过长');
        return;
      }
      qrModal.value = true;
    },
    icon: h(QrcodeOutlined),
  },
];
</script>

<style lang="scss" scoped>
@import '../common.scss';

:deep(.ant-btn) {
  border: none;
  padding: 0;
  height: fit-content !important;
  background: none;
  white-space: nowrap !important;
}
.md-card {
  :deep(.ant-card-body) {
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>

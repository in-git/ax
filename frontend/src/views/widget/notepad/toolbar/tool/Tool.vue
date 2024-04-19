<template>
  <div class="tools flex gc-4">
    <a-dropdown trigger="click">
      <div class="menu-button">工具</div>
      <template #overlay>
        <a-menu :items="items"></a-menu>
      </template>
    </a-dropdown>
    <div class="menu-button px-12" @click="ai">AI一下</div>
    <a-modal centered title="二维码" v-model:open="modal" getContainer=".system__notepad">
      <a-flex class="w-100 flex h-100 flex-s">
        <a-qrcode :value="text" />
      </a-flex>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { getData, setData } from '@/global/config/window';
import { QrcodeOutlined, RetweetOutlined } from '@ant-design/icons-vue';
import { message, type ItemType } from 'ant-design-vue';

const modal = ref(false);
const notepadId = inject<string>('data')!;

const ai = () => {};
const text = computed(() => {
  return getData(notepadId) || '';
});
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
      modal.value = true;
    },
    icon: h(QrcodeOutlined),
  },
];
</script>

<style lang="scss" scoped>
@import '../common.scss';
</style>

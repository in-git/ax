<template>
  <div class="tools">
    <a-dropdown trigger="click">
      <div class="menu-button">工具</div>
      <template #overlay>
        <a-menu :items="items"></a-menu>
      </template>
    </a-dropdown>

    <SystemModal w="400px" h="300px" title="二维码" v-model:visible="qrModal">
      <div class="w-100 h-100 flex flex-s">
        <a-qrcode :value="text" />
      </div>
    </SystemModal>
  </div>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { getData, setData } from '@/global/config/window';
import { QrcodeOutlined, RetweetOutlined } from '@ant-design/icons-vue';
import { message, type ItemType } from 'ant-design-vue';

const qrModal = ref(false);
const notepadId = inject<string>('data')!;

const text = computed(() => {
  return getData(notepadId);
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
        message.warn('二维码内容过长');
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
</style>

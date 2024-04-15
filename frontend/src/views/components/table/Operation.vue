<template>
  <div>
    <a-dropdown-button
      :disabled="loading"
      @click="onClick"
      trigger="click"
      v-bind="$attrs"
      @open-change="openChange"
    >
      <EditOutlined />
      <template #overlay>
        <a-menu :items="items" @select="onSelect"></a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script setup lang="ts">
import type { SelectInfo } from 'ant-design-vue/es/menu/src/interface';

const emit = defineEmits(['edit', 'openChange']);
const openChange = () => {
  emit('openChange');
};
const onClick = () => {
  emit('edit');
};
defineProps<{ items: any; loading: boolean }>();

const onSelect = (info: SelectInfo) => {
  console.log(info.item);
};
</script>

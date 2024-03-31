<template>
  <div>
    <a-dropdown-button @click="onClick" trigger="click" v-bind="$attrs">
      <EditOutlined />
      <template #overlay>
        <a-menu :items="items" @select="onSelect"></a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script setup lang="ts">
import type { SelectInfo } from 'ant-design-vue/es/menu/src/interface';

const emit = defineEmits(['edit']);

const onClick = () => {
  emit('edit');
};
const props = defineProps<{ items: any }>();

const onSelect = (info: SelectInfo) => {
  console.log(info.item);
};
</script>

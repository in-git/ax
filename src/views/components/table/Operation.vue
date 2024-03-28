<template>
  <div>
    <a-dropdown-button @click="onClick" trigger="click">
      <EditOutlined />
      <template #overlay>
        <a-menu :items="items"></a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['edit']);

const onClick = () => {
  emit('edit');
};
const props = defineProps<{ items: any }>();
</script>

<style lang="scss" scoped></style>

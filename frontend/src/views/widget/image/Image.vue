<template>
  <a-card class="system__module image">
    <a-flex class="h-100" :gap="4" vertical>
      <ImageHead></ImageHead>
      <ImageContent></ImageContent>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import ImageContent from './content/ImageContent.vue';
import ImageHead from './head/ImageHead.vue';

const props = defineProps<{
  src?: string;
}>();
</script>

<style lang="scss" scoped>
.system__module {
  :deep(.ant-card) {
    box-shadow: none;
  }
  :deep(.ant-card-body) {
    padding: 4px 8px;
    height: 100%;
    overflow: hidden;
  }
}
</style>

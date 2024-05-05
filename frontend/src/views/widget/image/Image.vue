<template>
  <a-card class="system__module" :bordered="false">
    <a-flex class="h-100" :gap="4" vertical>
      <ImageHead></ImageHead>
      <ImageContent></ImageContent>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import ImageContent from './content/ImageContent.vue';
import { cropperImage } from './data/data';
import ImageHead from './head/ImageHead.vue';

const props = defineProps<{
  src?: string;
}>();

watch(
  props,
  () => {
    console.log(props);

    if (props.src) {
      cropperImage.value = props.src;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.system__module {
  background-color: black;
}
:deep(.ant-card) {
  box-shadow: none;
  background-color: transparent !important;
}
:deep(.ant-card-body) {
  padding: 4px 8px;
  height: 100%;
  overflow: hidden;
}
</style>

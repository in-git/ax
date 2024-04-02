<template>
  <SystemModal
    w="800px"
    h="600px"
    v-model:visible="show"
    title="图库"
    @update:visible="close"
    position="fixed"
    to-body
  >
    <div class="system-module gallery flex" v-if="show">
      <GalleryNav />
      <GalleryBody />
    </div>
  </SystemModal>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import GalleryBody from './body/GalleryBody.vue';
import GalleryNav from './nav/GalleryNav.vue';

const show = ref(false);
const emit = defineEmits(['update:visible']);
const props = defineProps<{
  visible: boolean;
}>();
watch(
  props,
  () => {
    show.value = props.visible;
  },
  {
    deep: true,
  },
);
const close = () => {
  emit('update:visible', show.value);
};
</script>

<style lang="scss" scoped>
.gallery {
}
</style>

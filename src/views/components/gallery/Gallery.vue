<template>
  <Teleport to="body">
    <div class="system-module gallery flex" v-if="show">
      <div class="gallery-container flex">
        <GalleryNav />
        <GalleryBody />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
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
  position: fixed;
  width: 800px;
  height: 600px;
  z-index: 100;
  left: calc(50% - 400px);
  top: calc(50% - 300px);
  .gallery-container {
    width: 100%;
    height: 100%;
  }
}
</style>

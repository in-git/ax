<template>
  <a-card class="system__module">
    <video controls :src="src" v-if="src"></video>
    <div v-else class="h-100 empty flex flex-s">
      <div class="text-linear-gradient">AX视频播放器</div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  src?: string;
}>();
</script>

<style lang="scss" scoped>
video {
  width: 100%;
  height: 100%;
}
.empty {
  color: white;
}
.system__module {
  :deep(.ant-card-body) {
    height: 100%;
    background: black;
  }
}
</style>

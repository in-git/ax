<template>
  <a-card class="system__module">
    <video
      controls
      src="https://mylivewallpapers.com/wp-content/uploads/Cute/PREVIEW-Doggie-Corgi-Bone.mp4"
    ></video>
  </a-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
video {
  width: 100%;
  height: 100%;
}
.system__module {
  :deep(.ant-card-body) {
    height: 100%;
    background: black;
  }
}
</style>

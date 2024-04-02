<template>
  <div class="gallery-head">
    <div class="system-head px-12">
      <div>壁纸选择</div>
      <div class="system-icon" @click="emit('close', false)">
        <close-outlined />
      </div>
    </div>
    <div class="system-head px-12">
      <div>
        <a-button>使用</a-button>
      </div>
      <div>
        <a-button type="primary">使用</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.gallery-head {
  line-height: 42px;
  background-color: #f2f3f3;
}
</style>

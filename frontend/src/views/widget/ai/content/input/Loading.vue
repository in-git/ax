<template>
  <div class="loading w-100 flex-s flex absolute flex-col system__subtitle">
    <LoadingOutlined spin class="text-16" />
    <div class="my-12">正在响应,请稍后...</div>
    <div>
      响应时间:
      <span :class="[getClass()]">{{ time }}</span>
      毫秒
    </div>
  </div>
</template>

<script setup lang="ts">
import { aiClearTimer } from './data';

const time = ref(0);
aiClearTimer.value = setInterval(() => {
  time.value++;
});
const getClass = () => {
  if (time.value < 1500) {
    return '';
  } else if (time.value > 1500 && time.value < 3000) {
    return 'text-warning';
  } else {
    return 'text-danger';
  }
};
onUnmounted(() => {
  clearInterval(aiClearTimer.value);
});
</script>

<style lang="scss" scoped>
.loading {
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  .text-warning {
    color: orange;
  }
  .text-danger {
    color: #ff5757;
  }
}
</style>

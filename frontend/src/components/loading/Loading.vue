<template>
  <div class="loader-container w-100 h-100 flex flex-s flex-col">
    <div class="loader"></div>

    <a-button type="text" class="mt-24" @click="cancelLoading">
      <span class="text-red">取消请求</span>
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { cancelAllRequest } from '@/api/config/interceptor';

const emit = defineEmits(['cancel']);
const cancelLoading = () => {
  cancelAllRequest();
  emit('cancel');
};
</script>

<style lang="scss" scoped>
.text-red {
  color: pink;
}
.loader {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
  overflow: hidden;
  color: #666666;
}
.loader:before,
.loader:after {
  content: 'Loading...';
  grid-area: 1/1;
  clip-path: inset(0 -200% 50%);
  text-shadow: -10ch 0 0;
  animation: l12 1s infinite;
}
.loader:after {
  clip-path: inset(50% -200% 0%);
  text-shadow: 10ch 0 0;
  --s: -1;
}
@keyframes l12 {
  50%,
  100% {
    transform: translateX(calc(var(--s, 1) * 100%));
  }
}
</style>

<template>
  <div class="loading w-100 h-100 flex-s flex absolute flex-col text-999">
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
const time = ref(0);
const clearFlag = setInterval(() => {
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
  clearInterval(clearFlag);
});
</script>

<style lang="scss" scoped>
.loading {
  top: 0%;
  left: 0;
  width: 100%;
  .text-warning {
    color: orange;
  }
  .text-danger {
    color: #ff5757;
  }
}
</style>

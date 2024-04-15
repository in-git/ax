<template>
  <div class="server-info flex flex-s relative" id="server-info" ref="target">
    <div class="info-container">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { serverInfo } from '../data';

const target = ref(null);
const targetIsVisible = ref(false);
const text = ref('');

let index = 0;
let clearFlag: NodeJS.Timeout;
nextTick(() => {
  if (!serverInfo.value) return;
  const raw = ref(
    `操作系统:${serverInfo.value.sys.osName}
服务器IP:${serverInfo.value.sys.computerIp}
运行时长:${serverInfo.value.jvm.runTime}
系统架构:${serverInfo.value.sys.osArch}
启动时间:${serverInfo.value.jvm.startTime}`,
  );

  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting;
    if (isIntersecting) {
      clearFlag = setInterval(() => {
        if (index <= raw.value.length - 1) {
          text.value += raw.value[index];
          index++;
        } else {
          clearInterval(clearFlag);
        }
      }, 50);
    } else {
      index = 0;
      text.value = '';
    }
  });
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

<template>
  <div>
    <BaseURL />
    <a-card class="mt-12" title="超时">
      <div>
        <div class="flex align-center gc-12 text-999">
          短
          <a-slider
            tooltipOpen
            v-model:value="devStore.$state.timeout"
            :options="timeoutOptions"
            :min="3"
            class="flex-1"
            :max="20"
            :tip-formatter="v => v + 's'"
          ></a-slider>
          长
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import useDeveloperStore from '@/store/developer';
import BaseURL from './BaseURL.vue';
import { timeoutOptions } from './data';

const devStore = useDeveloperStore();
</script>

<style lang="scss" scoped>
.timeout-list {
  display: flex;
  gap: 12px;
  li {
    $wh: 64px;
    width: $wh;
    height: $wh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    cursor: pointer;
    &:nth-child(1) {
      background: #d8e2dc;
    }
    &:nth-child(2) {
      background: #ffcad4;
    }
    &:nth-child(3) {
      background: #9d8189;
    }
  }
}
</style>

<template>
  <div class="server-memory relative" v-if="serverInfo" id="server-cpu">
    <div class="container">
      <div class="loading">
        <div
          id="loadingMask"
          :style="{ top: `${100 - serverInfo.cpu.used}%` }"
          class="loading-mask"
        ></div>
        <div id="loading" class="loading-text text-center">
          <div>{{ serverInfo.cpu.used }}%</div>
          <div class="text-12">CPU占用率</div>
        </div>
      </div>
    </div>
    <div class="cpu-info p-4">
      <div class="text-16 title">CPU信息</div>
      <ul>
        <li>
          <div>核心数</div>
          <div>{{ serverInfo.cpu.cpuNum }}</div>
        </li>
        <li>
          <div>空闲率</div>
          <div>
            <span class="mr-8">{{ serverInfo.cpu.free }}%</span>
            <a-progress
              trailColor="white"
              :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
              }"
              class="m-0"
              style="width: 100px"
              :percent="serverInfo.cpu.free"
              :show-info="false"
            />
          </div>
        </li>
        <li>
          <div>系统使用率</div>
          <div>
            <span class="mr-8">{{ serverInfo.cpu.sys }}%</span>
            <a-progress
              trailColor="white"
              :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
              }"
              class="m-0"
              style="width: 100px"
              :show-info="false"
              :percent="serverInfo.cpu.sys"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { serverInfo } from '../data';
</script>

<style lang="scss" scoped>
@import './style';
@import '../loading';
</style>

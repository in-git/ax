<template>
  <div class="menu-body flex-1">
    <div class="title">辅助工具</div>
    <div>
      <ul class="p-12">
        <li
          class="flex flex-col justify-center align-center"
          @click="item.action(item)"
          v-for="(item, key) in functionList"
          :key="key"
        >
          <img :src="item.icon" :draggable="false" width="36" height="36" />
          <div class="mt-8">{{ item.title }}</div>
        </li>
      </ul>
    </div>

    <Nodejs></Nodejs>
  </div>
</template>

<script setup lang="ts">
import { functionList } from './data';
import Nodejs from './nodejs/Nodejs.vue';
</script>

<style lang="scss" scoped>
@import './body.scss';
</style>

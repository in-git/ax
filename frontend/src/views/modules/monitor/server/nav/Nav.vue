<template>
  <div class="nav">
    <ul>
      <li
        v-for="(item, key) in navList"
        :key="key"
        :class="{ active: navList[navIndex].id === item.id }"
        @click="selectNav(key)"
      >
        <div class="icon">
          <CaretRightFilled v-if="navList[navIndex].id === item.id" />
        </div>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { CaretRightFilled } from '@ant-design/icons-vue';

import { navIndex, navList, selectNav } from './data';
</script>

<style lang="scss" scoped>
@import './style';
</style>

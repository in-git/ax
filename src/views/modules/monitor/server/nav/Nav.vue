<template>
  <div class="nav">
    <ul>
      <li
        v-for="(item, key) in navList"
        :key="key"
        :class="{ active: navList[navIndex].id === item.id }"
        @click="selectNav(item, key)"
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
.nav {
  position: absolute;
  color: white;
  top: 10px;
  left: 0;
  z-index: 100;
  ul {
    %center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    li {
      width: 100px;
      line-height: 32px;
      cursor: pointer;
      @extend %center;
      color: #777;
      &:hover {
        color: #aaa;
      }
    }
  }
  .icon {
    width: 24px;
    height: 24px;
    @extend %center;
  }
  li.active {
    font-weight: bold;
    color: white;
  }
}
</style>

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
  </div>
</template>

<script setup lang="ts">
import { functionList } from './data';
</script>

<style lang="scss" scoped>
.menu-body {
  color: white;
  ul {
    display: flex;
    li {
      width: 84px;
      padding: 8px 0;
      border-radius: var(--radius);
      &:hover {
        background: #333;
      }
      cursor: pointer;
      img {
        border-radius: var(--radius);
      }
    }
  }
  .title {
    line-height: 42px;
    padding: 0 12px;
    border-bottom: 1px solid #999;
  }
}
</style>

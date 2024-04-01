<template>
  <div class="menu-body flex-1">
    <div class="title">辅助工具</div>
    <div>
      <ul class="p-12">
        <li class="flex flex-col justify-center align-center">
          <img src="https://www.baidu.com/favicon.ico" :draggable="false" width="48" height="48" />
          <div class="mt-8">百度</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.menu-body {
  color: white;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    li {
      width: 100px;
      padding: 8px 0;
      border-radius: 2px;
      &:hover {
        background: #333;
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

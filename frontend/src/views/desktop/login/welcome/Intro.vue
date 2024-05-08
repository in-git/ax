<template>
  <div class="intro">
    <a-space direction="vertical" class="w-100">
      <a-card title="后台服务器未连接？">
        <ul>
          <li>关闭本地代理</li>
          <li>AX测试服务器只能在HTTP下使用</li>
        </ul>
      </a-card>
      <a-card title="按钮未响应？">
        <ul>
          <li>目前部分功能正在开发中</li>
          <li>控制台,缓存监控等正在建设中</li>
        </ul>
      </a-card>
      <a-card title="管理员账号？">
        <ul>
          <li>开放观察者账号,能够预览整个系统的功能，但不能进行任何操作</li>
          <li>账号:observer,密码:axobserver</li>
        </ul>
      </a-card>
    </a-space>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  position: relative;
  h4 {
    font-weight: 600;
  }
}
ul {
  list-style: decimal;
  padding-left: 20px;
}
</style>

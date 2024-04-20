<template>
  <!--  -->
  <div>
    <div class="nodejs flex">
      <div class="banner"></div>
      <div class="info">
        <div class="node-title">Nodejs</div>
        <ul>
          <li>代码生成</li>
          <li>文件传输</li>
          <li>接口调用</li>
        </ul>
        <div class="enter">
          <a @click="enter">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            进入控制台
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { openWindow } from '@/global/config/window';
import NodejsPanel from '@/views/node/panel/Panel.vue';
import { showStarter } from '../../data';

const enter = () => {
  openWindow({
    title: 'Nodejs',
    component: markRaw(NodejsPanel),
    icon: `https://nodejs.org/static/images/favicons/favicon.png`,
  });
  showStarter.value = false;
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

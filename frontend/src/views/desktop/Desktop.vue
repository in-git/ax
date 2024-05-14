<template>
  <div class="desktop">
    <div class="flex-1 h-100 flex flex-col">
      <Toolbar />
      <Apps />
      <Missions />
    </div>
    <Background></Background>
    <!--  -->
    <div class="windows">
      <Draggable
        v-for="item in windowList"
        :key="item.id"
        :w="item.w"
        :h="item.h"
        :z="item.z"
        :x="item.x"
        :y="item.y"
        :title="item.title"
        v-show="!item.hidden"
        :id="item.id"
        @close="closeWindow(item.id || '')"
        :icon="item.icon"
        :dark="item.dark"
      >
        <Animation
          appear
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <component :data="item.data" :id="item.id" :is="item.component"></component>
        </Animation>
      </Draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Apps from './apps/Apps.vue';
import Background from './background/Background.vue';
import Missions from './missions/Missions.vue';
import Toolbar from './toolbar/Toolbar.vue';

import { closeWindow, windowList } from '@/global/window/window';

import { openLogin } from '@/global/window/widget';
import { getToken } from '@/store/user/utils';
import Draggable from '../../views/components/draggable/Draggable.vue';
import { getUserRouters } from './apps/data';

onMounted(() => {
  if (!getToken()) {
    openLogin();
  } else {
    getUserRouters();
  }
});
</script>

<style lang="scss" scoped>
.desktop {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.windows {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
}
</style>

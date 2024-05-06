<template>
  <Teleport to="body">
    <Transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <div class="system-starter flex" v-if="showStarter" ref="menuRef">
        <MenuSidebar />
        <MenuBody />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import MenuBody from './body/MenuBody.vue';
import { showStarter } from './data';
import MenuSidebar from './sidebar/MenuSidebar.vue';

const menuRef = ref();

nextTick(() => {
  onClickOutside(menuRef, () => {
    showStarter.value = false;
  });
});
</script>

<style lang="scss" scoped>
.system-starter {
  position: absolute;
  bottom: 40px;
  height: 450px;
  left: 0;
  width: 350px;
  z-index: 100;
  background: #07071bde;
  backdrop-filter: blur(4px);
}
</style>

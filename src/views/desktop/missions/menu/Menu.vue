<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInUp"
    leave-active-class="animate__animated animate__fadeOutDown"
  >
    <div class="system-menu" v-if="showWindowMenu" ref="menuRef">
      <MenuSidebar />
      <MenuBody />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import MenuBody from './body/MenuBody.vue';
import { showWindowMenu } from './data';
import MenuSidebar from './sidebar/MenuSidebar.vue';

const menuRef = ref();

nextTick(() => {
  onClickOutside(menuRef, () => {
    showWindowMenu.value = false;
  });
});
</script>

<style lang="scss" scoped>
.system-menu {
  position: absolute;
  bottom: 40px;
  height: 650px;
  left: 0;
  width: 550px;
  background: #232323ee;
}
</style>

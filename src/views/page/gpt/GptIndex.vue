<template>
  <div class="gpt-home">
    <div class="core flex relative h-100">
      <div>
        <SidebarHead />
        <SidebarVue />
      </div>
      <Content />
      <Transition
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
      >
        <SettingVue v-if="showSetting"></SettingVue>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import Content from './content/Content.vue';
import SettingVue from './content/setting/Setting.vue';
import { showSetting } from './content/setting/setting';
import SidebarVue from './sidebar/Sidebar.vue';
import SidebarHead from './sidebar/SidebarHead.vue';
</script>
<style scoped lang="scss">
.gpt-home {
  width: 100%;
  height: 100%;

  .core {
    transition: var(--transition);
    background: #fff;
  }
}
</style>

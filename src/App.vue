<template>
  <ConfigProvider
    :theme="theme"
    :locale="locale"
    :componentSize="store.$state.theme.size"
    :direction="store.$state.theme.direction"
    :wave="{
      disabled: !store.$state.theme.wave,
    }"
    :virtual="store.$state.theme.virtual"
    :autoInsertSpaceInButton="store.$state.theme.autoInsertSpaceInButton"
  >
    <Desktop />

    <!--  -->
    <div class="windows">
      <Draggable
        v-for="item in windowList"
        :key="item.id"
        :w="item.w"
        :h="item.h"
        :z="item.z"
        :title="item.title"
        v-show="!item.hidden"
        :id="item.id"
        @close="closeWindow(item.id || '')"
        :icon="item.icon"
      >
        <component :data="item.data" :is="item.component"></component>
      </Draggable>
    </div>
  </ConfigProvider>

  <Contextmenu />
</template>

<script setup lang="ts">
import { closeWindow, windowList } from '@/global/config/window';
import { ConfigProvider } from 'ant-design-vue';
import en_US from 'ant-design-vue/es/locale/en_US';
import axios from 'axios';
import { loadSystemComponents, loadSystemIcons } from './initialization';
import usePageStore from './store/page';
import Contextmenu from './views/components/contextmenu/Contextmenu.vue';
import Draggable from './views/components/draggable/Draggable.vue';
import Desktop from './views/desktop/Desktop.vue';

const locale = ref(en_US);

const store = usePageStore();
/*  */
axios.defaults.baseURL = store.$state.developer.baseURL;
axios.defaults.timeout = store.$state.developer.timeout * 1000;
/*  */
nextTick(async () => {
  loadSystemIcons();
  loadSystemComponents();
});

document.addEventListener(
  'wheel',
  e => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  },
  { passive: false },
);
const theme = computed(() => {
  return {
    token: {
      colorPrimary: store.$state.theme.theme,
      borderRadius: 4,
    },
  };
});
</script>

<style lang="scss" scoped>
.windows {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
}
</style>

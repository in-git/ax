<template>
  <ConfigProvider
    :theme="theme"
    :locale="locale"
    :componentSize="store.$state.size"
    :direction="store.$state.direction"
    :wave="{
      disabled: !store.$state.wave,
    }"
    :virtual="store.$state.virtual"
    :autoInsertSpaceInButton="store.$state.autoInsertSpaceInButton"
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
      >
        <component :data="item.data" :is="item.component"></component>
      </Draggable>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import Draggable from '@/components/draggable/Draggable.vue';
import { closeWindow, windowList } from '@/global/config/window';
import { ConfigProvider } from 'ant-design-vue';
import en_US from 'ant-design-vue/es/locale/en_US';
import { loadSystemComponents, loadSystemIcons } from './initialization';
import usePageStore from './store/page';
import Desktop from './views/desktop/Desktop.vue';

const locale = ref(en_US);
const store = usePageStore();
nextTick(() => {
  loadSystemIcons();
  loadSystemComponents();
});
const theme = computed(() => {
  return {
    token: {
      colorPrimary: store.$state.theme,
      borderRadius: 2,
    },
  };
});
</script>

<style lang="scss" scoped>
.windows {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>

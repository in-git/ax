<template>
  <ConfigProvider
    :theme="localTheme"
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
        <component :data="item.data" :id="item.id" :is="item.component"></component>
      </Draggable>
    </div>
  </ConfigProvider>
  <!-- 通用右键菜单 -->
  <Contextmenu />
  <!-- 图片选择器 -->
  <Gallery />
</template>

<script setup lang="ts">
import { closeWindow, windowList } from '@/global/config/window';
import Gallery from '@/views/selector/gallery/Gallery.vue';
import { ConfigProvider, theme } from 'ant-design-vue';
import zh_CN from 'ant-design-vue/es/locale/zh_CN';
import {
  loadGoogleFont,
  loadSystemComponents,
  loadSystemIcons,
  setAxios,
  setCssVar,
  setEvent,
} from './initialization';
import usePageStore from './store/page';
import Contextmenu from './views/components/contextmenu/Contextmenu.vue';
import Draggable from './views/components/draggable/Draggable.vue';
import Desktop from './views/desktop/Desktop.vue';

const locale = ref(zh_CN);
const { compactAlgorithm, darkAlgorithm, defaultAlgorithm } = theme;
const store = usePageStore();

/* 初始化请求 */
setAxios();
/*  */
nextTick(async () => {
  /* 加载本地图标，与下面组件配合使用 */
  loadSystemIcons();
  /* 初始化系统本地组件 */
  loadSystemComponents();
  /* 初始化字体 */
  loadGoogleFont();

  /* 初始化事件 */
  setEvent();
  /* 设置主题变量 */
  setCssVar();
});

const localTheme = computed(() => {
  let algorithm = store.$state.theme.algorithm;
  let map = {
    dark: darkAlgorithm,
    compact: compactAlgorithm,
    default: defaultAlgorithm,
  };
  return {
    token: {
      colorPrimary: store.$state.theme.theme,
      borderRadius: store.$state.theme.borderRadius,
      fontSize: store.$state.theme.fontSize,
      colorText: '#313030',
    },
    algorithm: map[algorithm],
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

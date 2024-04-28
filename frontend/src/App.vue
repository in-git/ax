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
    <!-- PC显示 -->
    <Desktop />
    <PhoneVue />
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
      >
        <component :data="item.data" :id="item.id" :is="item.component"></component>
      </Draggable>
    </div>
  </ConfigProvider>
  <!-- 通用右键菜单 -->
  <Contextmenu />
</template>

<script setup lang="ts">
import { closeWindow, windowList } from '@/global/config/window';
import { ConfigProvider, Modal, theme } from 'ant-design-vue';
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
import PhoneVue from './views/phone/Phone.vue';

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

  /* 当前不支持https访问 */
  if (window.location.href.startsWith('https')) {
    Modal.confirm({
      title: '警告',
      content: '当前访问的是https的网址,暂时不支持。请手动粘贴http的网址进行浏览，后续会解决该问题',
      onOk() {
        window.location.href = 'http://in-git.gitee.io/ax-view/';
      },
      centered: true,
    });
  }
});
/* 设置本地主题 */
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

@media screen and (max-width: 875px) {
  .desktop {
    display: none;
  }
}
@media screen and (min-width: 874px) {
  .phone {
    display: none;
  }
}
</style>

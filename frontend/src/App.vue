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
    <!-- 移动端 -->
    <PhoneVue />
  </ConfigProvider>
  <!-- 通用右键菜单 -->
  <Contextmenu />
</template>

<script setup lang="ts">
import { ConfigProvider, theme } from 'ant-design-vue';
import zh_CN from 'ant-design-vue/es/locale/zh_CN';
import {
  loadSystemComponents,
  loadSystemIcons,
  screenDetection,
  setAxios,
  setCssVar,
  setEvent,
} from './initialization';
import usePageStore from './store/page';
import Contextmenu from './views/components/contextmenu/Contextmenu.vue';
import Desktop from './views/desktop/Desktop.vue';
import PhoneVue from './views/phone/Phone.vue';
/* 设置Dayjs，用于日期选择 */
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const locale = ref(zh_CN);
const { compactAlgorithm, darkAlgorithm, defaultAlgorithm } = theme;
const store = usePageStore();

/* 初始化请求 */
setAxios();
/*  */
nextTick(async () => {
  /* 加载系统的图标 */
  loadSystemIcons();
  /* 初始化系统本地组件 */
  loadSystemComponents();
  /* 初始化事件 */
  setEvent();
  /* 设置主题变量 */
  setCssVar();
  /* 屏幕检测 */
  screenDetection();
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

<style lang="scss" scoped></style>

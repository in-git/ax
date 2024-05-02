<template>
  <a-card class="h-100 card__container" :bordered="false" :body-style="{ height: '100%' }">
    <a-flex class="settings flex h-100 w-100">
      <a-card :body-style="{ height: '100%' }">
        <a-menu v-model:selectedKeys="selectedKeys">
          <a-menu-item v-for="(item, key) in nav" :key="item.id" @click="selectNav(item)">
            {{ item.title }}
            <template #icon>
              <component :is="item.icon"></component>
            </template>
          </a-menu-item>
        </a-menu>
      </a-card>
      <div class="content flex-1">
        <component :is="current.component"></component>
      </div>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import {
  AreaChartOutlined,
  BgColorsOutlined,
  DesktopOutlined,
  GlobalOutlined,
  RobotOutlined,
} from '@ant-design/icons-vue';
import { nanoid } from 'nanoid';
import AI from './ai/AI.vue';
import DesktopSetting from './desktop/DesktopSetting.vue';
import Net from './net/Net.vue';
import ThemeVue from './theme/Theme.vue';
import GalleryBody from './wallpaper/GalleryBody.vue';
interface Nav {
  title: string;
  icon: any;
  id: string;
  component: any;
}
const selectedKeys = ref(['primary']);
const nav: Nav[] = [
  {
    title: '外观设置',
    icon: markRaw(BgColorsOutlined),
    id: 'primary',
    component: markRaw(ThemeVue),
  },
  {
    title: '壁纸设置',
    icon: markRaw(AreaChartOutlined),
    id: nanoid(),
    component: markRaw(GalleryBody),
  },
  {
    title: '网络设置',
    icon: markRaw(GlobalOutlined),
    id: nanoid(),
    component: markRaw(Net),
  },
  {
    title: '桌面设置',
    icon: markRaw(DesktopOutlined),
    id: nanoid(),
    component: markRaw(DesktopSetting),
  },
  {
    title: '千帆设置',
    icon: markRaw(RobotOutlined),
    id: nanoid(),
    component: markRaw(AI),
  },
];

const current = ref<Nav>(nav[0]);

const selectNav = (item: Nav) => {
  current.value = item;
};
</script>

<style lang="scss" scoped>
:deep(.ant-menu) {
  overflow: hidden;
  width: 140px;
  height: 100%;
  border-right: none !important;
  &::-webkit-scrollbar {
    display: none;
  }
}
.content {
  overflow-y: auto;
}
</style>

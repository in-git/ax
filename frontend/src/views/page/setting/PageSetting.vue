<template>
  <div class="page-setting w-100 h-100 system-module">
    <div class="settings flex h-100 w-100">
      <div class="sidebar">
        <ul>
          <li
            v-for="(item, key) in nav"
            :key="key"
            :class="{ active: item.id === current.id }"
            @click="selectNav(item)"
            class="flex gc-4 align-center"
          >
            <div class="icon">
              <component :is="item.icon"></component>
            </div>
            <span>
              {{ item.title }}
            </span>
          </li>
        </ul>
      </div>
      <div class="content flex-1">
        <component :is="current.component"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AimOutlined,
  BgColorsOutlined,
  DesktopOutlined,
  GlobalOutlined,
} from '@ant-design/icons-vue';
import { nanoid } from 'nanoid';
import AI from './ai/AI.vue';
import DesktopSetting from './desktop/DesktopSetting.vue';
import Net from './system/net/Net.vue';
import ThemeVue from './theme/Theme.vue';

const nav: Nav[] = [
  {
    title: '外观设置',
    icon: markRaw(BgColorsOutlined),
    id: nanoid(),
    component: markRaw(ThemeVue),
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
    title: 'AI设置',
    icon: markRaw(AimOutlined),
    id: nanoid(),
    component: markRaw(AI),
  },
];

const current = ref<Nav>(nav[0]);

interface Nav {
  title: string;
  icon: any;
  id: string;
  component: any;
}

const selectNav = (item: Nav) => {
  current.value = item;
};
</script>

<style lang="scss" scoped>
$hh: 42px;
.header {
  line-height: $hh;
  padding: 0 12px;
  cursor: move;
  background: #0d0d0e;
  color: white;
}
.drv {
  border: 1px solid #eee;
  box-shadow: 0 0 25px #a0a0a065;
  border-radius: var(--radius);
  overflow: hidden;
}
.page-setting {
  .settings {
    height: calc(100%);
    .sidebar {
      min-width: 160px;
      background: #f8f8f8;
      border-right: 1px solid #ddd;
      ul {
        li {
          line-height: $hh;
          padding: 0 var(--padding);
          cursor: pointer;
          user-select: none;
          color: #999;
          &:hover {
            background: #eee;
            color: #666;
          }
        }
        li.active {
          color: #333;
          font-weight: bold;
        }
      }
      .icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>

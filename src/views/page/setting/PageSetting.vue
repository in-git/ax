<template>
  <div class="page-setting w-100 h-100">
    <div class="settings flex h-100 w-100">
      <div class="sidebar p-4">
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
            {{ item.title }}
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
import { BgColorsOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { nanoid } from 'nanoid';
import SystemVue from './system/System.vue';
import ThemeVue from './theme/Theme.vue';

const nav: Nav[] = [
  {
    title: '外观设置',
    icon: markRaw(BgColorsOutlined),
    id: nanoid(),
    component: markRaw(ThemeVue),
  },
  {
    title: '系统设置',
    icon: markRaw(SettingOutlined),
    id: nanoid(),
    component: markRaw(SystemVue),
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
  border-radius: 4px;
  overflow: hidden;
}
.page-setting {
  .settings {
    height: calc(100%);
    column-gap: 8px;
    .sidebar {
      width: 200px;
      background: #ececec;
      ul {
        li {
          line-height: $hh;
          padding: 0 12px;
          border-radius: var(--radius);
          cursor: pointer;
          user-select: none;
          margin-bottom: 8px;
          &:hover {
            background: #f8f8f8;
          }
        }
        li.active {
          background: var(--primary);
          color: wheat;
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

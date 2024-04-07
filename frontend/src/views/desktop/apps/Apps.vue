<template>
  <div class="apps flex-1 p-4" ref="apps" @contextmenu="openContextMenu">
    <template v-if="menuList.length >= 0">
      <div class="flex h-100">
        <ul ref="appRef">
          <li
            v-for="item in menuList"
            :key="item.name"
            :class="{ selected: item.path === selected }"
            @click="select(item)"
            @dblclick="openApp(item)"
            v-show="!item.hidden"
            @contextmenu.stop="appContextMenu(item)"
          >
            <div>
              <div class="logo">
                <img :src="getIconByName(item) || logoPng" :draggable="false" width="48" />
              </div>
              <div class="title">{{ item.meta?.title || 'Untitled' }}</div>
            </div>
          </li>
        </ul>
      </div>
    </template>
    <Loading v-else></Loading>
    <NoticeVue></NoticeVue>
  </div>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import logoPng from '@/assets/logo.png';
import Loading from '@/components/loading/Loading.vue';
import { useSortable } from '@vueuse/integrations/useSortable';
import { appContextMenu, openContextMenu } from './contextmenu';
import { getIconByName, getUserRouters, openApp } from './data';
import NoticeVue from './notice/Notice.vue';
const selected = ref<string>('');
const appRef = ref();
const menuList = ref<Routers[]>([]);
const apps = ref<HTMLElement>();

onMounted(async () => {
  const data = await getUserRouters();
  menuList.value = data.map(e => {
    if (e.children?.length === 1) {
      e = e.children[0];
    }
    return e;
  });
  nextTick(() => {
    useSortable(appRef, menuList, {
      animation: 200,
    });
  });
});
const select = (item: Routers) => {
  selected.value = item.path;
};
</script>

<style lang="scss" scoped>
@import './apps.scss';
</style>

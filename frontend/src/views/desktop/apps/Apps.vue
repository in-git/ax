<template>
  <div class="apps flex-1 p-4" ref="apps" @contextmenu="openContextMenu" :style="style">
    <template v-if="menuList.length >= 0">
      <div class="flex h-100">
        <ul ref="appRef">
          <li
            v-for="item in menuList"
            :key="item.name"
            :class="{ selected: item.name === selected || item.meta.title === selected }"
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
    <CreateMenu></CreateMenu>
  </div>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import logoPng from '@/assets/logo.png';
import Loading from '@/components/loading/Loading.vue';
import usePageStore from '@/store/page';
import { useSortable } from '@vueuse/integrations/useSortable';
import { appContextMenu, openContextMenu } from './contextmenu';
import CreateMenu from './create-menu/CreateMenu.vue';
import { getIconByName, getUserRouters, openApp } from './data';

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
  selected.value = item.name || item.meta.title;
};

const pageStore = usePageStore();
const style = computed(() => {
  return {
    backdropFilter: ` blur(${pageStore.$state.desktop.background.blur}px)`,
  };
});
</script>

<style lang="scss" scoped>
@import './apps.scss';
</style>

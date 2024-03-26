<template>
  <div class="apps flex-1 p-12" ref="apps">
    <template v-if="menuList.length > 0">
      <ul ref="appRef" :style="style">
        <li
          v-for="item in menuList"
          :key="item.name"
          :class="{ selected: item.path === selected }"
          @click="select(item)"
          @dblclick="openApp(item)"
          v-show="!item.hidden"
        >
          <div>
            <div class="logo">
              <img :src="getIconByName(item) || logoPng" :draggable="false" width="48" />
            </div>
            <div class="title">{{ item.meta.title }}</div>
          </div>
        </li>
      </ul>
    </template>
    <Loading v-else></Loading>
    <NoticeVue></NoticeVue>
  </div>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import logoPng from '@/assets/logo.png';
import Loading from '@/components/loading/Loading.vue';
import { useElementBounding } from '@vueuse/core';
import { useSortable } from '@vueuse/integrations/useSortable';
import type { CSSProperties } from 'vue';
import { getIconByName, getUserRouters, openApp } from './data';
import NoticeVue from './notice/Notice.vue';

const selected = ref<string>('');
const appRef = ref();
const menuList = ref<Routers[]>([]);
const apps = ref();
const maxHeight = ref(0);

onMounted(async () => {
  const data = await getUserRouters();
  menuList.value = data;
  nextTick(() => {
    useSortable(appRef, menuList, {
      animation: 200,
    });
    const { height } = useElementBounding(apps);
    maxHeight.value = height.value;
  });
});
const select = (item: Routers) => {
  selected.value = item.path;
  console.log(item.component);
};

const style = computed((): CSSProperties => {
  const cols = Math.floor(74 / menuList.value.length);
  return {
    gridTemplateColumns: `repeat(${cols}, 74px)`,
  };
});
</script>

<style lang="scss" scoped>
@import './apps.scss';
</style>

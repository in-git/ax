<template>
  <div class="apps flex-1 p-12">
    <template v-if="menuList.length > 0">
      <ul ref="appRef">
        <li
          v-for="(item, key) in menuList"
          :key="key"
          :class="{ selected: item.path === selected }"
          @click="select(item)"
        >
          <div class="logo">
            <img :src="logo" :draggable="false" width="48" />
          </div>
          <div class="title">{{ item.meta.title }}</div>
        </li>
      </ul>
    </template>
    <Loading v-else></Loading>
  </div>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/user/types';
import logo from '@/assets/logo.png';
import Loading from '@/components/loading/Loading.vue';
import type { MenuItem } from '@/types/system';
import { useSortable } from '@vueuse/integrations/useSortable';
import { getUserRouters } from './data';
const selected = ref<string>('');
const appRef = ref();

const menuList = ref<Routers[]>([]);
onMounted(async () => {
  const data = await getUserRouters();
  console.log(data);
  menuList.value = data;
});

nextTick(() => {
  useSortable(appRef, menuList, {
    animation: 200,
  });
});
const select = (item: MenuItem) => {
  selected.value = item.path;
};
</script>

<style lang="scss" scoped>
@import './apps.scss';
</style>

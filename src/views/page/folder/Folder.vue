<template>
  <div class="folder system-module">
    <div class="system-head px-12">
      <a-button type="primary" :disabled="!current" @click="openApp(current!)">打开</a-button>
      <div class="text-999">
        数量:
        <a-tag>{{ data.length }}</a-tag>
      </div>
    </div>
    <ul class="p-12" ref="ulRef">
      <li
        v-for="(item, key) in data"
        :key="key"
        @dblclick="openApp(item)"
        @click="selectItem(item)"
        :class="{ active: item.name === current?.name }"
      >
        <div class="logo">
          <img :src="getIconByName(item) || logoPng" :draggable="false" width="36" />
        </div>
        <div class="title">{{ item.meta.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import logoPng from '@/assets/logo.png';
import { getIconByName, openApp } from '@/views/desktop/apps/data';
import { useSortable } from '@vueuse/integrations/useSortable';

const current = ref<Routers>();
const ulRef = ref();

const routers = ref<Routers[]>([]);

const selectItem = (item: Routers) => {
  current.value = item;
};

const props = defineProps<{
  data: Routers[];
}>();

watch(props, () => {
  routers.value = props.data;
});

nextTick(() => {
  useSortable(ulRef, routers);
});
</script>

<style lang="scss" scoped>
.folder {
  ul {
    display: flex;
    gap: 12px;
  }
  li {
    text-align: center;
    cursor: pointer;
    width: 74px;
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid transparent;
    user-select: none !important;
    &:hover {
      background: #eee;
    }
    .title {
      line-height: 16px;
      color: black;
      overflow: hidden;
    }
  }
  li.active {
    border: 1px solid #8db1e4;
    background: #8db1e423;
  }
}
</style>

<template>
  <a-card class="folder system-module">
    <a-card>
      <div class="text-999">
        数量:
        <span class="ml-8">{{ data.length }}</span>
      </div>
    </a-card>
    <a-card class="mt-8" :bordered="false">
      <ul class="flex-wrap" ref="ulRef">
        <li
          v-for="(item, key) in props.data"
          :key="key"
          @dblclick="openApp(item)"
          @click="selectItem(item)"
          :class="{ active: item.name === current?.name }"
          v-show="!item.hidden"
          class="flex justify-between align-center"
        >
          <div class="flex gc-16 flex-1">
            <div class="flex flex-s">
              <div v-if="item.meta.link" class="link h-100">
                <img
                  ref="imageRef"
                  :src="`https://favicon.qqsuu.cn/${item.meta.link}`"
                  @error="onError(key)"
                  :draggable="false"
                />
              </div>
              <div v-else-if="item.meta">
                <img :src="getIconByName(item) || logoPng" :draggable="false" />
              </div>
              <div v-else>
                <img :src="folderPng" :draggable="false" />
              </div>
            </div>
            <div class="flex justify-between flex-1 info align-center">
              <div>
                <div>{{ item.meta.title }}</div>
                <div class="text-999 mt-8">路径： {{ item.path }}</div>
              </div>
              <a-button shape="round" class="open" @click="openApp(item)">打开</a-button>
            </div>
          </div>
        </li>
      </ul>
    </a-card>
  </a-card>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import logoPng from '@/assets/logo.png';
import folderPng from '@/assets/system/folder.png';
import { getIconByName, openApp } from '@/views/desktop/apps/data';

const imageRef = ref<HTMLImageElement[]>();

const onError = (key: number) => {
  nextTick(() => {
    if (!imageRef.value) return;
    imageRef.value[key].src = logoPng;
  });
};

const current = ref<Routers>();
const ulRef = ref();

const selectItem = (item: Routers) => {
  current.value = item;
};

const props = defineProps<{
  data: Routers[];
}>();
</script>

<style lang="scss" scoped>
@import './style';
</style>

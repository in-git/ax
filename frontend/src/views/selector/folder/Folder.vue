<template>
  <a-card class="folder system__module">
    <a-card class="mt-8">
      <ul>
        <li
          v-for="(item, key) in props.data"
          :key="key"
          @dblclick="openApp(item)"
          @click="selectItem(item)"
          :class="{ active: item.name === current?.name }"
          v-show="!item.hidden"
          class="flex justify-between align-center"
        >
          <a-card class="w-100">
            <a-flex class="gc-16">
              <a-flex justify="space-between" :align="'center'">
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
                  <img :src="getStaticImage('image-icon/edge.png')" :draggable="false" />
                </div>
              </a-flex>
              <a-flex justify="space-between" :align="'center'" class="flex-1 info">
                <div>
                  <div>{{ item.meta.title }}</div>
                  <div class="system__subtitle mt-8">路径： {{ item.path }}</div>
                </div>
                <a-button class="open" @click="openApp(item)">打开</a-button>
              </a-flex>
            </a-flex>
          </a-card>
        </li>
      </ul>
    </a-card>
  </a-card>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import { getStaticImage } from '@/api/utils/image';
import logoPng from '@/assets/logo.png';
import { getIconByName, openApp } from '@/views/desktop/apps/data';

const imageRef = ref<HTMLImageElement[]>();

const onError = (key: number) => {
  nextTick(() => {
    if (!imageRef.value) return;
    imageRef.value[key].src = logoPng;
  });
};

const current = ref<Routers>();

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

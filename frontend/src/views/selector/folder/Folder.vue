<template>
  <a-card class="system__module">
    <a-card title="菜单列表"></a-card>
    <a-card class="folder">
      <ul>
        <li
          v-for="(item, key) in menuList"
          :key="key"
          @dblclick="openApp(item)"
          @click="selectItem(item)"
          :class="{ active: item.name === current?.name }"
          v-show="!item.hidden"
        >
          <div class="text-center h-100" :bordered="false">
            <div class="image-container">
              <div v-if="item.meta.link" class="link">
                <img
                  ref="imageRef"
                  :src="getFavicon(item.meta.link)"
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
            </div>
            <div class="title">
              <div>{{ item.meta.title }}</div>
            </div>
          </div>
        </li>
      </ul>
    </a-card>
  </a-card>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import { getFavicon, getStaticImage } from '@/api/utils/image';
import logoPng from '@/assets/logo.png';
import { getIconByName, openApp } from '@/views/desktop/apps/data';

const imageRef = ref<HTMLImageElement[]>();

const menuList = ref<Routers[]>([]);
const menuName = ref('');
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
  data?: Routers[];
}>();

onMounted(() => {
  if (props.data) {
    menuList.value = props.data;
  }
});
</script>

<style lang="scss" scoped>
@import './style';
</style>

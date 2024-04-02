<template>
  <div class="wallpaper">
    <div class="tags">
      <a-tabs>
        <a-tab-pane :key="item.cid" :tab="item.title" v-for="item in tags"></a-tab-pane>
      </a-tabs>
    </div>
    <div class="images">
      <ul>
        <li v-for="(item, key) in images" :key="key">
          <img :src="`https://picsum.photos/1920/870?r=${key}`" class="w-100 h-100" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type MockWallpaperImage, type MockWallpaperTag } from '@/api/mock/wallpaper/types';
import { mockTags, mockWallpaper } from '@/api/mock/wallpaper/wallpaper';

const images = ref<MockWallpaperImage[]>([]);

const tags = ref<MockWallpaperTag[]>([]);

const getTags = async () => {
  const { data } = await mockTags();
  if (data.data) {
    tags.value = data.data;
  }
};

const getWallpaper = async () => {
  const { data } = await mockWallpaper();
  if (data.data) {
    images.value = data.data;
  }
};

onMounted(async () => {
  getWallpaper();
  getTags();
});
</script>

<style lang="scss" scoped>
.wallpaper {
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 4px;
  }
  li {
    flex: 1;
    flex-basis: 120px;
    border: 2px solid #ddd;
    height: 90px;
    max-width: 25%;
    padding: 2px;
  }
  .tags {
    position: sticky;
    top: 0;
    background: white;
    padding: 4px;
  }
}
</style>

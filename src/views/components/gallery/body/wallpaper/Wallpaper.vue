<template>
  <div class="wallpaper">
    <div class="tags">
      <a-tabs>
        <a-tab-pane :key="item.cid" :tab="item.title" v-for="item in tags"></a-tab-pane>
      </a-tabs>
    </div>
    <a-spin wrapperClassName="w-100 h-100" :spinning="loading">
      <div class="images">
        <ul>
          <li v-for="(item, key) in images" :key="key" @click="selectPhoto(item.download_url)">
            <img class="w-100 h-100" :preview="false" :src="item.download_url" />
          </li>
        </ul>
      </div>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { type MockWallpaperTag } from '@/api/mock/wallpaper/types';
import { mockTags } from '@/api/mock/wallpaper/wallpaper';
import { setBackground } from '@/store/page/utils';
import axios from 'axios';
interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const loading = ref();
const http = axios.create({
  baseURL: '',
});

const getPhotos = async () => {
  const { data } = await http.get<PicsumPhoto[]>(`https://picsum.photos/v2/list?page=2&limit=30`);
  return data;
};
const images = ref<PicsumPhoto[]>([]);

const tags = ref<MockWallpaperTag[]>([]);

const getTags = async () => {
  const { data } = await mockTags();
  if (data.data) {
    tags.value = data.data;
  }
};

const selectPhoto = (src: string) => {
  setBackground({
    type: 'image',
    src,
  });
};
const getWallpaper = async () => {
  loading.value = true;
  const data = await getPhotos();
  console.log(data);

  if (data) {
    images.value = data;
  }
  loading.value = false;
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
    cursor: pointer;
    img {
      object-fit: contain;
    }
  }
  .tags {
    position: sticky;
    top: 0;
    background: white;
    padding: 4px;
    z-index: 10;
  }
}
</style>

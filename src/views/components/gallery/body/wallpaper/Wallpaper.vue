<template>
  <div>
    <div class="tags">
      <a-tag v-for="(item, key) in tags" :key="key"></a-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchWallpaper, getWallpaperTags } from '@/api/node/wallpaper/wallpaper';
const tags = ref();

const wallpaperList = ref([]);

const getTags = async () => {
  const { data: tagData } = await getWallpaperTags();
  console.log(tagData.data);
};

const getWallpaper = async () => {
  const { data } = await fetchWallpaper({
    pageNum: 1,
    pageSize: 20,
    cid: 36,
  });
  console.log(data.data);
};
onMounted(async () => {
  getTags();
  getWallpaper();
});
</script>

<style lang="scss" scoped></style>

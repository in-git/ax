<template>
  <div class="wallpaper">
    <a-spin wrapperClassName="w-100 h-100" :spinning="galleryConfig.loading">
      <div class="images">
        <ul>
          <li
            class="li-background"
            v-for="(item, key) in galleryConfig.data"
            :key="key"
            @click="selectPhoto(item.download_url)"
            :class="{ active: currentPhoto === item.download_url }"
          >
            <img class="w-100 h-100" :preview="false" :src="item.download_url" />
          </li>
        </ul>
      </div>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { currentPhoto, galleryConfig, getPhotos } from './data';

const selectPhoto = (src: string) => {
  currentPhoto.value = src;
};

onMounted(async () => {
  getPhotos();
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
    background: url('../../assets/loading.png');
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .tags {
    position: sticky;
    top: 0;
    background: white;
    padding: 4px;
    z-index: 10;
  }

  .active {
    border: 2px solid var(--primary);
  }
}
</style>

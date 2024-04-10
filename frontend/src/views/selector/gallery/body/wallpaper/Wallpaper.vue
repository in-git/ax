<template>
  <div class="wallpaper">
    <div class="w-100 h-100 flex flex-s">
      <template v-if="pexelsKey">
        <a-spin :spinning="pexelsResult.loading" size="large">
          <div class="h-100 images">
            <ul>
              <li
                class="li-background"
                v-for="(item, key) in pexelsResult.data"
                :key="key"
                @click="selectPhoto(item.src)"
                :class="{ active: currentPhoto === item.src }"
              >
                <img class="w-100 h-100" :preview="false" :src="item.src" />
              </li>
            </ul>
          </div>
        </a-spin>
      </template>

      <a-result status="warning" title="没有填写Pexels Key" v-else>
        <template #extra>
          <a-button key="console" type="primary" @click="close">前往设置中心</a-button>
        </template>

        <template #subTitle>
          该API是免费的
          <a-button type="link" href="https://www.pexels.com/zh-cn/" target="_blank">获取</a-button>
        </template>
      </a-result>
    </div>
  </div>
</template>

<script setup lang="ts">
import { openWindow } from '@/global/config/window';
import PageSetting from '@/views/page/setting/PageSetting.vue';
import localforage from 'localforage';
import { setGallery } from '../../data';
import { currentPhoto, getPexelsPhotos, pexelsResult } from './data';

const pexelsKey = ref();
onMounted(async () => {
  pexelsKey.value = (await localforage.getItem('db-api-pexels')) || '';
});
const selectPhoto = (src: string) => {
  currentPhoto.value = src;
};
const close = () => {
  setGallery({
    show: false,
  });
  openWindow({
    title: '系统设置',
    component: markRaw(PageSetting),
    id: 'system_setting',
  });
};
onMounted(async () => {
  getPexelsPhotos();
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
  .images {
    min-height: 200px;
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

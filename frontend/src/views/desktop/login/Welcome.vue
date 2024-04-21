<template>
  <div class="welcome">
    <a-space class="w-100" :size="24" direction="vertical">
      <h1 class="text-white title">AX 后台管理系统</h1>
      <div class="mb-12">
        <div class="desc">Windows操作风格的管理系统</div>
        <div class="desc">一键生成CURD代码,高效开发</div>
        <div class="desc">
          权限控制，精确到
          <a-button type="primary">按钮</a-button>
        </div>
      </div>

      <div>
        <ButtonVue></ButtonVue>
      </div>
      <a-row :gutter="12" class="mb-12 frame">
        <a-col :span="24">
          <a-carousel class="carousel" autoplay>
            <div class="carousel-item" v-for="item in 5">
              <img :src="`${resourceUrl}/public/cover-${item}.webp`" alt="" />
            </div>
          </a-carousel>
        </a-col>
      </a-row>
      <div class="media frame">
        <video-background
          :poster="posterImg"
          src="https://mylivewallpapers.com/wp-content/uploads/Cute/PREVIEW-Beach-Cat.mp4"
          class="w-100 h-100"
        ></video-background>
      </div>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { resourceUrl } from '@/store/system/utils';
import VideoBackground from 'vue-responsive-video-background-player';
import posterImg from '../assets/welcome.webp';
import ButtonVue from './welcome/Button.vue';
</script>

<style lang="scss" scoped>
@import './welcome/style';
.welcome {
  background: url('../assets/welcome-background.webp');
}
</style>

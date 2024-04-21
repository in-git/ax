<template>
  <div class="welcome flex flex-col">
    <h1 class="text-white title">AX 后台管理系统</h1>
    <div class="w-100">
      <div class="desc">
        <div class="mb-12 text-16">
          后端管理系统的设计和开发是为了实现对应用程序后端的全面管理和控制。通过后端管理系统，管理员可以管理用户账户、权限和角色，监控和分析系统的运行状况，查看和导出数据报表，管理系统配置和设置，以及进行必要的维护和更新。此外，后端管理系统还提供了对数据的有效管理，包括数据的录入、编辑、删除和查询，以及数据的备份和恢复功能，确保数据的安全性和完整性。
        </div>
      </div>
      <a-carousel>
        <div>123</div>
      </a-carousel>
    </div>

    <div class="media flex-1 flex flex-s">
      <video-background
        :poster="posterImg"
        src="https://mylivewallpapers.com/wp-content/uploads/Cute/PREVIEW-Beach-Cat.mp4"
        class="w-100 h-100"
      ></video-background>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoBackground from 'vue-responsive-video-background-player';
import posterImg from '../assets/welcome.webp';
</script>

<style lang="scss" scoped>
.welcome {
  flex-basis: 70%;
  background: #f8f8f8;
  border-right: 1px solid #ddd;
  padding: 64px;
  position: relative;
  background: url('../assets/welcome-background.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .title {
    background-image: linear-gradient(to right bottom, #8064ff, #07a6f0, #9307f0);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 48px;
  }
  .desc {
    margin: 24px 0;
    color: #aaa;
  }

  .media {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 100%;
    border-radius: var(--radius);
    video {
      border-radius: var(--radius);
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }
  }
}
</style>

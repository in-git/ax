<template>
  <div class="banner">
    <div class="grid-item ad">
      <div class="preview-container" style="max-width: 600px">
        <div class="preview">
          <a-carousel autoplay>
            <div v-for="item in 5" :key="item">
              <a-image :src="getStaticImage(`/public/cover-${item}.webp`)"></a-image>
            </div>
          </a-carousel>

          <h3 class="mt-16">AX简介</h3>
          <p class="description">
            为您提供了一个全面的功能套件，其中包括多项内置基础功能，以满足您的各种需求。首先，记事本功能让您可以轻松记录重要的想法、备忘录和待办事项。而浏览器功能则让您能够方便地浏览互联网上的各种信息和资源。此外，我们还提供了先进的人工智能对话功能，可以与您进行智能对话，并为您提供相关的信息和建议。而视频播放功能则使您能够观看各种视频内容，包括电影、剧集和在线课程。最后，图片处理功能让您能够轻松编辑和优化您的照片，以满足您的个性化需求。这些功能的集合使您能够更加高效地完成各种任务，并且提升您的数字生活体验。
          </p>
        </div>
      </div>
    </div>
    <div class="grid-item starred">
      <a-flex :justify="'space-between'">
        <h3>Star的用户</h3>
        <span>
          <a target="_blank" href="https://gitee.com/in-git/ax.git">
            <img src="https://gitee.com/in-git/ax/badge/star.svg?theme=dark" alt="Gitee star" />
          </a>
        </span>
      </a-flex>
      <div class="starred-list">
        <div v-for="item in startedList" :key="item.id">
          <a class="text-center" target="_blank" :href="item.html_url">
            <a-avatar :size="32" :src="item.avatar_url"></a-avatar>
            <div class="mt-4 text-12">{{ item.name }}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="grid-item content">
      <h3>交流中心</h3>
      <a-empty description="正在建设中" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import { getStars, startedList } from './banner/data';

onMounted(() => {
  getStars();
});
</script>

<style lang="scss" scoped>
.banner {
  height: 500px;
  display: grid;
  margin: 80px 0;

  gap: 24px;
  grid-template-areas:
    'ad starred'
    '. content';
  .grid-item {
    background: linear-gradient(to bottom left, #080053, #000c13);
    border-radius: var(--radius);
    padding: 12px;
    color: white;
  }

  .ad {
    grid-area: ad;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .content {
    grid-area: content;
  }
}
h3 {
  color: white;
  margin-bottom: 12px;
}
.starred {
  grid-area: starred;
  .starred-list {
    color: wheat;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(42px, 1fr));
    a {
      display: inline-block;
    }
  }
}
.preview-container {
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  height: 100%;
  min-width: 240px;
}
.preview {
  width: 100%;
  height: 100%;
  position: absolute;
  .description {
    color: #999;
    letter-spacing: 2px;
  }
}
</style>

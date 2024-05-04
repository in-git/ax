<template>
  <div class="banner">
    <div class="grid-item ad">
      <h3>特别赞助</h3>
      <a-empty />
    </div>
    <div class="grid-item starred">
      <a-flex :justify="'space-between'">
        <h3>Star的用户</h3>
        <a target="_blank" href="https://gitee.com/in-git/ax-view.git">
          <img src="https://gitee.com/in-git/ax-view/badge/star.svg?theme=dark" alt="Gitee star" />
        </a>
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
import { getStars, startedList } from './banner/data';

const qq = ref('建设中');

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
</style>

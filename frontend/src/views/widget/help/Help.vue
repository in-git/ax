<template>
  <a-card class="system__module help">
    <a-row :gutter="12" class="h-100">
      <a-col :span="6">
        <a-card title="帮助列表" :bordered="false">
          <a-menu :items="urlList" @select="selectItem"></a-menu>
        </a-card>
      </a-col>
      <a-col :span="18">
        <iframe
          class="w-100 h-100"
          :src="currentUrl"
          scrolling="no"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        ></iframe>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface';

const urlList = [
  {
    src: `//player.bilibili.com/player.html?aid=311436477&bvid=BV1cN411K77r&cid=1065154116&p=1`,
    label: '备忘录',
    key: '1',
  },
  {
    src: `//player.bilibili.com/player.html?aid=247565373&bvid=BV1nv41177qz&cid=324178274&p=1`,
    label: '记事本',
    key: '2',
  },
];
const currentUrl = ref(urlList[0].src);

const selectItem = (menuInfo: MenuInfo) => {
  currentUrl.value = menuInfo.item.src;
};
</script>

<style lang="scss" scoped>
:deep(.ant-menu) {
  overflow: hidden;
  border: none !important;
}
:deep(.ant-card-body) {
  height: 100%;
}
</style>

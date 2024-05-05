<template>
  <a-card class="system__module">
    <a-space class="w-100" direction="vertical">
      <a-card title="视频测试">
        <a-flex>
          <input v-model="videoSrc" type="text" placeholder="请输入视频地址" />
          <button @click="openVideo">打开视频</button>
        </a-flex>
      </a-card>
      <!--  -->
      <a-card title="记事本测试">
        <a-flex :align="'top'">
          <textarea v-model="textarea"></textarea>
          <div>
            <button @click="openNotepad">打开记事本</button>
          </div>
        </a-flex>
      </a-card>
      <a-card title="图片">
        <a-flex :align="'top'">
          <div>
            <button @click="openImage">图片测试</button>
          </div>
        </a-flex>
      </a-card>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import { openWindow } from '@/global/config/window';
import Image from '../image/Image.vue';
import Notepad from '../notepad/Notepad.vue';
import Video from '../video/Video.vue';

const videoSrc = ref('https://media.w3.org/2010/05/sintel/trailer.mp4');
const textarea = ref('AX后台管理');

const openVideo = () => {
  openWindow({
    title: '视频',
    component: markRaw(Video),
    id: 'video',
    icon: getStaticImage('image-icon/movies.png'),
    dark: true,
    data: {
      src: videoSrc.value,
    },
  });
};

const openNotepad = () => {
  openWindow({
    title: '记事本',
    component: markRaw(Notepad),
    id: 'notepad',
    icon: getStaticImage('image-icon/notepad.png'),
    dark: true,
    data: textarea.value,
  });
};

const openImage = () => {
  openWindow({
    title: '图片',
    component: markRaw(Image),
    id: 'image',
    icon: getStaticImage('image-icon/gallery.png'),
    dark: true,
    data: {
      src: '',
    },
  });
};
</script>

<style lang="scss" scoped></style>

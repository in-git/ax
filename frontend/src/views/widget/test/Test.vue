<template>
  <a-card class="system__module">
    <a-space class="w-100" direction="vertical">
      <a-card title="备忘录">
        <div style="width: 200px">
          <a-input v-model:value="memo">
            <template #addonAfter>
              <a-popover title="备忘录" trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="memo" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </div>
      </a-card>
      <a-card title="浏览器测试">
        <a-flex>
          <input v-model="link" type="text" placeholder="请输入链接" />
          <button @click="showBrowser">打开链接</button>
        </a-flex>
      </a-card>
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
          <textarea v-model="base64" placeholder="请输入base64"></textarea>
          <div>
            <button @click="openImage">图片测试</button>
          </div>
        </a-flex>
      </a-card>

      <a-card title="图标选择器">
        <a-input v-model:value="icon" style="width: 200px">
          <template #addonAfter>
            <a-popover title="图标选择器" trigger="click">
              <smile-outlined />
              <template #content>
                <IconSelector v-model="icon" />
              </template>
            </a-popover>
          </template>
        </a-input>
      </a-card>

      <a-card title="图片选择器">
        <a-popover trigger="click">
          <a-image
            v-if="gallery"
            height="80px"
            width="120px"
            :src="getStaticImage(gallery)"
          ></a-image>
          <a-button>选择图片</a-button>
          <template #content>
            <Gallery type="wallpaper" v-model="gallery" />
          </template>
        </a-popover>
      </a-card>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import { openBrowser } from '@/global/window/widget';
import { openWindow } from '@/global/window/window';
import Gallery from '@/views/selector/gallery/Gallery.vue';
import IconSelector from '@/views/selector/icon/IconSelector.vue';
import Memo from '@/views/selector/memo/Memo.vue';
import Image from '../image/Image.vue';
import Notepad from '../notepad/Notepad.vue';
import Video from '../video/Video.vue';

const videoSrc = ref('https://media.w3.org/2010/05/sintel/trailer.mp4');
const textarea = ref('AX后台管理');
const base64 = ref(
  `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACpJREFUGFdjZLbp//+PkYHh////DMwMjAyMzDYT//9jQABsAv3/kRQwAABSkg05zdHXzgAAAABJRU5ErkJggg==`,
);
const link = ref('https://win11.blueedge.me/');
const icon = ref();
const gallery = ref();
const memo = ref();
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
      src: base64.value,
    },
  });
};
const showBrowser = () => {
  openBrowser({
    src: link.value,
  });
};
</script>

<style lang="scss" scoped></style>

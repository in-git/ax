<template>
  <a-card class="system__module help">
    <a-row :gutter="12" class="h-100">
      <a-col :span="6">
        <a-card title="帮助列表" :bordered="false" :body-style="{ padding: 0 }">
          <a-menu
            v-model:selected-keys="selectedKeys"
            :items="urlList"
            @select="selectItem"
          ></a-menu>
        </a-card>
      </a-col>
      <a-col :span="18">
        <!-- <iframe
          v-if="currentUrl"
          class="w-100 h-100"
          :src="currentUrl"
          scrolling="no"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        ></iframe> -->
        <a-empty v-if="currentUrl" description="正在建设中"></a-empty>
        <a-card v-else :bordered="false">
          <a-row>
            <a-col :span="12" :offset="6">
              <h1 class="text-white title">AX 帮助中心</h1>
              <a-divider>
                <a-typography-text code>AX</a-typography-text>
                <span class="system__subtitle">新一代的后台管理系统</span>
              </a-divider>
              <a-typography-paragraph type="secondary">
                <ul class="flex flex-col gr-12">
                  <li>内置图片，图标选择器，方便用户快速录入</li>
                  <li>重新定义记事本,接入AI,让它空前强大</li>
                  <li>系统工具，互相调用,输入更快捷</li>
                  <li>权限管理，等级分明，见证超管威力</li>
                </ul>
              </a-typography-paragraph>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface';

const urlList = [
  {
    src: ``,
    label: '介绍',
    key: '0',
  },
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
const selectedKeys = ref(['0']);
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
:deep(.ant-card) {
  box-shadow: none;
}
:deep(.ant-card-body) {
  height: 100%;
}

.title {
  background-image: var(--linear-gradient);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 32px;
  text-align: center;
}
</style>

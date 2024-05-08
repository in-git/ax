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
                  <li>账号test02 是访客权限,能新建数据,数据私有,但被屏蔽了大部分功能</li>
                  <li>账号observer 是观察者账号,能看不能用</li>
                  <li>系统测试表是低代码生成的样板</li>
                  <li>功能很多,目前实现的是基础操作优化,目的是能快速录入</li>
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

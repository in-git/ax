<template>
  <div class="content-head flex justify-between align-center">
    <div class="flex gc-4 align-center">
      <a-select
        v-model:value="gptStore.$state.config.model"
        style="width: 160px"
        :options="modelList"
      ></a-select>
      <a-divider type="vertical"></a-divider>
      <a-breadcrumb>
        <a-breadcrumb-item>会话列表</a-breadcrumb-item>
        <a-breadcrumb-item>
          {{ conversation.title || 'empty' }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div class="flex align-center gc-4">
      <template v-for="(item, key) in options" :key="key">
        <a-tooltip :title="item.tips">
          <div class="system-icon" @click="item.action">
            <component :is="item.icon"></component>
          </div>
        </a-tooltip>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import useGptStore from '@/views/page/gpt/store/gpt';
import { SettingOutlined } from '@ant-design/icons-vue';
import { conversation } from '../../sidebar/sidebar';
import { modelList } from '../setting/gpt/data';
import { showSetting } from '../setting/setting';
const gptStore = useGptStore();

const options = [
  {
    icon: markRaw(SettingOutlined),
    tips: '打开设置',
    action() {
      showSetting.value = true;
    },
  },
];
</script>

<style lang="scss" scoped>
.content-head {
  line-height: 32px;
  padding: 0 8px;
  height: 32px;
  border-bottom: 1px solid #ddd;

  .system-icon {
    width: 24px;
    height: 24px;
    &:hover {
      background: #e7e7e7;
    }
  }
}
</style>
@/views/page/gpt/gpt/gpt

<template>
  <div class="toolbar flex align-center justify-between px-8">
    <div>
      <Keyword />
    </div>
    <!--  -->
    <div class="flex gc-4 align-center">
      <a-popconfirm title="清空当前聊天记录" @confirm="clear" placement="top">
        <a-tooltip title="清空当前会话的聊天记录" placement="bottom">
          <a-button type="text" danger>
            <DeleteOutlined />
          </a-button>
        </a-tooltip>
      </a-popconfirm>
      <!--  -->
      <a-popover title="开启/关闭记忆" placement="topRight">
        <a-switch size="small" v-model:checked="AIStore.$state.qianFan.memory"></a-switch>
        <template #content>
          <div class="system__subtitle" style="width: 200px">
            <InfoCircleFilled />
            将聊天记录给AI处理,让AI能通过对话理解语境,同时加剧TOKENS损耗
          </div>
          <a-card class="my-8">
            <a-statistic
              title="聊天字数统计"
              :value="count"
              v-if="AIStore.$state.qianFan.memory"
            ></a-statistic>
            <div v-else>
              <InfoCircleOutlined />
              不携带历史记录
              <div style="color: orange">
                <InfoCircleFilled />
                这会导致预设失效
              </div>
            </div>
          </a-card>
        </template>
      </a-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAIStore from '@/store/AI/AI';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { conversation } from '../../../sidebar/sidebar';
import Keyword from './Keyword.vue';

const AIStore = useAIStore();
const count = ref(0);

const clear = () => {
  conversation.value.messageList = [];
};
watch(
  conversation,
  () => {
    count.value = 0;
    conversation.value.messageList.forEach(e => {
      count.value += e.content.length;
    });
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
.toolbar {
  line-height: 32px;
  height: 32px;
  .system__icon {
    width: 24px;
    height: 24px;
    &:hover {
      background: #fff;
    }
  }
}
.selected-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid #eee;
  border-radius: var(--radius);
  padding: 8px !important;
  li {
    line-height: 28px;
    padding: 0 8px;
    border-radius: var(--radius);
    cursor: pointer;
    &:hover {
      background: var(--primary);
      color: white;
    }
  }
}
</style>

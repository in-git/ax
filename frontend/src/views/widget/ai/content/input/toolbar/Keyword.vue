<template>
  <div class="flex gc-4 align-center">
    <a-popover title="历史消息" trigger="click">
      <div class="system-icon">
        <HistoryOutlined />
      </div>
      <template #content>
        <div class="content">
          <div class="system-subtitle text-12">
            <div>你的描述越详细,chatgpt回答的越准确</div>
            <div>你能把话术存储起来，方便复用</div>
          </div>
          <ul class="list" v-if="AIStore.$state.conversation.history.length > 0">
            <li
              v-for="(item, key) in AIStore.$state.conversation.history"
              :key="key"
              @click="msg = item.text"
              class="flex justify-between align-center"
            >
              <div class="text">
                {{ item.text }}
              </div>
              <div class="system-icon delete" @click.stop="del(item.id)">
                <DeleteOutlined />
              </div>
            </li>
          </ul>

          <a-card v-else class="mt-8">
            <a-empty />
          </a-card>
        </div>
      </template>
    </a-popover>

    <a-tooltip title="保存">
      <a-button type="text" :disabled="!msg" @click="save">
        <SaveOutlined />
      </a-button>
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
import useAIStore from '@/store/AI/AI';
import { HistoryOutlined, SaveOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { nanoid } from 'nanoid';
import { msg } from '../data';

const AIStore = useAIStore();

const save = () => {
  AIStore.$state.conversation.history.push({
    id: nanoid(),
    text: msg.value,
  });
  message.success('操作成功');
};

const del = (id: string) => {
  AIStore.$state.conversation.history = AIStore.$state.conversation.history.filter(
    e => e.id !== id,
  );
};
</script>

<style lang="scss" scoped>
.content {
  width: 240px;
}
.list {
  margin-top: 8px;
  border: 1px solid #ddd;
  padding: 4px 8px !important;
  li {
    padding: 0 8px;
    line-height: 32px;
    cursor: pointer;
    border-radius: var(--radius);
    &:hover {
      background: var(--primary);
      color: white;
      .delete {
        opacity: 1;
      }
    }
    .text {
      width: 140px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .delete {
    opacity: 0;
  }
}
.system-icon {
  width: 24px;
  height: 24px;
}
.text-primary {
  color: var(--primary);
}
</style>

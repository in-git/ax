<template>
  <div class="gpt-sidebar">
    <ul class="list" v-show="list.length > 0">
      <li
        class="flex align-center p-8 justify-between"
        v-for="(item, key) in list"
        :key="item.id"
        :class="{ active: conversation.id === item.id }"
        @click="selectConversation(item)"
        ref="itemRef"
      >
        <div class="flex align-center">
          <div class="index flex flex-s">
            {{ key + 1 }}
          </div>
          <div class="ml-8">
            <div class="session-name" v-if="!item.edit">{{ item.title }}</div>
            <input
              @blur="item.edit = false"
              v-focus
              v-input-select
              type="text"
              @change="setTitle(item)"
              v-else
              v-model="item.title"
            />
            <div class="mt-4 time">{{ item.time }}</div>
          </div>
        </div>
        <div class="flex gc-4">
          <a-dropdown trigger="click" placement="bottomLeft">
            <div class="actions system-icon" @click.stop>
              <EllipsisOutlined />
            </div>
            <template #overlay>
              <a-menu
                style="width: 140px"
                @select="selectMenu"
                @click="selectMenu"
                :items="menus"
              ></a-menu>
            </template>
          </a-dropdown>
        </div>
      </li>
    </ul>
    <a-empty v-show="store.$state.conversation.list.length === 0" description="请创建对话" />
  </div>
</template>

<script setup lang="ts">
import useGptStore from '@/store/gpt/gpt';
import { EllipsisOutlined } from '@ant-design/icons-vue';
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface';
import type { Conversation } from '../store/types';
import { conversation, menus } from './sidebar';

const store = useGptStore();

const itemRef = ref<HTMLElement[] | null>();
const setTitle = (item: Conversation) => {
  if (!item.title) {
    item.title = `新建会话(${store.$state.conversation.list.length})`;
  }
};
const selectConversation = (item: Conversation) => {
  conversation.value = item;
};

const selectMenu = (info: MenuInfo) => {
  if (info.item.action) {
    info.item.action();
  }
};

const list = computed(() => store.$state.conversation.list);

watch(
  conversation,
  () => {
    const index = store.$state.conversation.list.findIndex(e => {
      return e.id === conversation.value.id;
    });
    if (!conversation.value.id && store.$state.conversation.list.length >= 1) {
      conversation.value = store.$state.conversation.list[0];
    }
    nextTick(() => {
      if (itemRef.value && index > -1) {
        itemRef.value[index].scrollIntoView({
          block: 'end',
        });
      }
    });
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
@import './sidebar';
</style>
@/views/page/gpt/gpt/gpt@/views/page/gpt/gpt/types @/views/page/gpt/gpt/gpt../gpt/types

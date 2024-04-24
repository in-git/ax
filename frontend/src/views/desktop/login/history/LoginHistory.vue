<template>
  <div>
    <a-form-item label="账号" required name="username">
      <a-input v-model:value="loginForm.username" allow-clear placeholder="请输入用户名">
        <template #suffix>
          <a-popover
            trigger="click"
            placement="bottomRight"
            title="历史登陆账号"
            v-model:open="visible"
          >
            <div>
              <HistoryOutlined />
              <DownOutlined class="text-6" />
            </div>
            <template #content>
              <div class="history-content">
                <a-list>
                  <a-list-item
                    :class="{
                      active:
                        item.password === loginForm.password &&
                        item.username === loginForm.username,
                    }"
                    class="flex justify-between align-center"
                    v-for="(item, key) in store.$state.history"
                    :key="key"
                    @click="use(item)"
                  >
                    <div>{{ item.username }}</div>
                    <div class="system__icon" @click.stop="delHistory(item)">
                      <DeleteOutlined />
                    </div>
                  </a-list-item>
                </a-list>
              </div>
            </template>
          </a-popover>
        </template>
      </a-input>
    </a-form-item>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/user';
import type { UserHistory } from '@/store/user/types';
import { HistoryOutlined } from '@ant-design/icons-vue';
import { useCloned } from '@vueuse/core';
import { loginForm } from '../data';

const visible = ref(false);
const store = useUserStore();
const use = (item: UserHistory) => {
  const newItem = useCloned(item).cloned.value;
  loginForm.value.username = newItem.username;
  loginForm.value.password = newItem.password;
  visible.value = false;
};
const delHistory = (item: UserHistory) => {
  store.$state.history = store.$state.history.filter(e => {
    return e.password !== item.password && item.username !== e.username;
  });
};
</script>

<style lang="scss" scoped>
.history-content {
  width: 200px;
  max-height: 400px;
  overflow-y: auto;
  :deep(.ant-list-item) {
    padding: 4px;
    &:hover {
      color: var(--primary);
      .system__icon {
        opacity: 1;
      }
    }
  }
  .system__icon {
    transition: opacity var(--transition);
    opacity: 0;
  }
}
</style>

<template>
  <a-card class="system__template">
    <template #extra>
      <a-button @click="getData" :loading="loading">刷新</a-button>
    </template>
    <template #title>
      <a-pagination
        :current="query.pageNum"
        :page-size="query.pageSize"
        :total="query.total"
      ></a-pagination>
    </template>

    <div vertical class="list flex-1">
      <a-spin :spinning="loading" class="h-100">
        <a-flex vertical :gap="8">
          <a-card v-for="item in feedbackData">
            <template #title>
              <a-avatar :size="24" :src="getGiteeImage(`avatar/${item.avatar}`)"></a-avatar>
              {{ item.nickname }}
            </template>
            {{ item.feedbackContent }}
            <template #extra>
              <span class="system__subtitle">{{ item.createTime }}</span>
            </template>
          </a-card>
        </a-flex>
      </a-spin>
    </div>
    <a-flex class="relative">
      <a-textarea
        :maxlength="140"
        :disabled="loading"
        v-model:value="text"
        placeholder="请输入"
        :auto-size="{
          minRows: 3,
        }"
      ></a-textarea>
      <a-button class="send" :loading="loading" type="primary" @click="send">发送</a-button>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import { createFeedback, fetchFeedbackList } from '@/api/modules/system/feedback/feedback';
import type { SystemFeedback } from '@/api/modules/system/feedback/types';
import { getGiteeImage } from '@/api/utils/image';
import useUserStore from '@/store/user';

const feedbackData = ref<SystemFeedback[]>([]);

const loading = ref(false);
const text = ref<string>('');
const userStore = useUserStore();

const query = ref<IQuery>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  orderByColumn: 'create_time',
  isAsc: 'desc',
});

const getData = async () => {
  try {
    loading.value = true;
    const { data } = await fetchFeedbackList(query.value);
    feedbackData.value = data.rows;
    query.value.total = data.total;
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};

const send = async () => {
  loading.value = true;
  if (!userStore.$state.userInfo) return;
  await createFeedback({
    feedbackContent: text.value,
    type: '',
    nickname: userStore.$state.userInfo.nickName || '匿名用户',
    deptId: userStore.$state.userInfo.deptId,
    avatar: userStore.$state.userInfo.avatar,
  });
  text.value = '';
  getData();
};
onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.system__template {
  :deep(.ant-card-body) {
    height: calc(100% - 38px);
    display: flex;
    padding-top: 0;
    gap: 8px;
    flex-direction: column;
  }
  .list {
    overflow-y: auto;
    height: calc(100% - 38px);
  }
  .send {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
</style>

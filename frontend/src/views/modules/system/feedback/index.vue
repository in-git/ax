<template>
  <div class="system-module flex flex-col p-4">
    <div class="my-4 flex justify-between">
      <a-button @click="feedbackList">
        <reload-outlined />
        刷新
      </a-button>
      <a-pagination
        :total="feedbackQuery.total"
        :page-size="feedbackQuery.pageSize"
        :current="feedbackQuery.pageNum"
        @change="pageChange"
        show-size-changer
      />
    </div>
    <div class="comment flex-1 flex flex-col gr-4">
      <a-spin :spinning="feedbackData.loading">
        <a-card
          v-for="(item, key) in feedbackData.data"
          :body-style="{ padding: '0' }"
          class="mb-4"
        >
          <a-comment
            :author="item.nickname || '匿名用户'"
            :key="key"
            :content="item.content"
            :datetime="item.createTime"
          ></a-comment>
        </a-card>
      </a-spin>
    </div>
    <div class="textarea relative">
      <textarea v-model="content" placeholder="请在这里留下反馈"></textarea>
      <div class="send">
        <a-button @click="send" type="primary">发送</a-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createFeedback } from '@/api/modules/system/feedback/feedback';
import useUserStore from '@/store/user';
import { response } from '@/utils/table/table';
import { feedbackData, feedbackList, feedbackQuery, pageChange } from './data/data';
const content = ref();

onMounted(() => {
  feedbackList();
});
const send = async () => {
  const store = useUserStore();
  await response(createFeedback, {
    nickname: store.$state.userInfo?.userName || '匿名用户',
    content: content.value,
  });
  content.value = '';
  feedbackList();
};
</script>

<style lang="scss" scoped>
.comment {
  overflow-y: auto;
}
.textarea {
  background-color: white;
  height: 120px;
  border-top: 1px solid #ddd;
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    padding: 4px;
    outline: none;
    resize: none;
  }
  .send {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>

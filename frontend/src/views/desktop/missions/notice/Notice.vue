<template>
  <div class="notice flex gc-4">
    <div class="system-icon" @click="showNotice = true">
      <a-badge :dot="dot">
        <BellOutlined class="icon" />
      </a-badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchNoticeList } from '@/api/modules/system/notice/notice';
import useSystemStore from '@/store/system';
import { BellOutlined } from '@ant-design/icons-vue';
import { noticeList, showNotice } from '../../notice/data';

const systemStore = useSystemStore();
const dot = ref(false);
const getSystemNotice = async () => {
  noticeList.value = [];
  const { data } = await fetchNoticeList({
    pageNum: 1,
    pageSize: 20,
    total: 0,
    noticeType: '1',
  });
  data.rows.forEach(e => {
    const isIncludes = systemStore.$state.readMessages.includes(e.noticeId);
    if (!isIncludes) {
      dot.value = true;
      noticeList.value.push({
        content: e.noticeContent,
        title: e.noticeTitle,
        type: 'notice',
        id: e.noticeId,
      });
    }
  });
};

onMounted(() => {
  getSystemNotice();
});
</script>

<style lang="scss" scoped>
.system-icon {
  width: 40px;
  color: white;
  height: 40px;
  border-radius: var(--radius);
  .icon {
    color: white !important;
    font-size: 18px;
  }
  &:hover {
    background: #727281c5;
  }
}
</style>

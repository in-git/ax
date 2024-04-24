<template>
  <a-flex :gap="8" class="cache-content">
    <div class="list">
      <a-card>
        <a-table
          :columns="columns"
          rowKey="cacheName"
          :dataSource="data"
          :customRow="customRow"
        ></a-table>
      </a-card>
    </div>
    <div class="flex-1">
      <a-card title="缓存内容">
        <template #extra>
          <a-button @click="clearCacheAll" danger>清除</a-button>
        </template>
        <a-form v-if="vk">
          <a-form-item label="缓存名称">
            <a-input v-model:value="vk.cacheName" />
          </a-form-item>
          <a-form-item label="缓存键名">
            <a-input v-model:value="vk.cacheKey" />
          </a-form-item>
          <a-form-item label="缓存内容">
            <a-textarea
              :autoSize="{ minRows: 2, maxRows: 8 }"
              v-model:value="vk.cacheValue"
            ></a-textarea>
          </a-form-item>
        </a-form>
        <a-empty v-else />
      </a-card>
    </div>
  </a-flex>
</template>

<script setup lang="ts">
import { clearCacheAll, getValue } from '@/api/modules/monitor/cache/cache';

defineProps<{
  data: SystemCache[];
}>();

const vk = ref<SystemCache>();

const customRow = (record: { title: string }) => {
  return {
    async onClick() {
      const { data } = await getValue(record.title);
      vk.value = data.data;
    },
  };
};
const columns = [
  {
    title: '缓存键名',
    dataIndex: 'title',
  },
];

watchEffect(() => {
  console.log('===');
});
</script>

<style lang="scss" scoped>
.list {
  width: 220px;

  .cache-content {
    :deep(.ant-card-body) {
      height: 300px;
      overflow-y: auto;
    }
  }
}
</style>

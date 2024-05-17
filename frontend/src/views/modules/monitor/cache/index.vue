<template>
  <a-card class="system__module">
    <a-card class="mb-8">
      <a-flex :justify="'space-between'">
        <div>缓存列表</div>
        <a-button @click="getData" :loading="loading">刷新</a-button>
      </a-flex>
    </a-card>
    <!--  -->
    <a-spin :spinning="loading">
      <ul>
        <li
          class="cursor-pointer"
          v-for="(item, key) in cacheData"
          :key="key"
          @click="selectItem(item.cacheName)"
        >
          <a-card>
            <a-descriptions :title="item.cacheName.replace(':', '')" :column="1">
              <a-descriptions-item label="缓存名字">
                {{ item.cacheName.replace(':', '') }}
              </a-descriptions-item>
              <a-descriptions-item label="备注">{{ item.remark }}</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </li>
      </ul>
      <!--  -->
    </a-spin>

    <a-modal
      :footer="false"
      v-model:open="open"
      get-container="#Cache"
      centered
      width="600px"
      title="缓存列表"
    >
      <Content :data="kvData" />
    </a-modal>
  </a-card>
</template>

<script setup lang="ts">
import { getCacheNames, getKey } from '@/api/modules/monitor/cache/cache';
import Content from './content/Content.vue';

const open = ref(false);
const cacheData = ref<SystemCache[]>([]);
const kvData = ref();
const loading = ref(false);

const selectItem = async (key: string) => {
  const { data } = await getKey(key);
  open.value = true;
  if (data.data) {
    kvData.value = data.data.map(e => {
      return {
        title: e,
      };
    });
  }
};

const getData = async () => {
  loading.value = true;
  const { data } = await getCacheNames();
  if (data.data) {
    cacheData.value = data.data;
    loading.value = false;
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
}
</style>

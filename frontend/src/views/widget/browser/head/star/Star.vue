<template>
  <a-popover trigger="click" placement="bottomRight" v-model:open="visible">
    <div class="system__icon star relative" @click="getList">
      <StarOutlined />
    </div>
    <template #content>
      <a-card style="width: 500px" title="网页收藏夹">
        <template #extra>
          <a-pagination
            :current="query.pageNum"
            :pageSize="query.pageSize"
            :total="query.total"
            @change="pageChange"
          ></a-pagination>
        </template>
        <a-flex :gap="8">
          <a-segmented
            @change="changeType"
            v-model:value="query.type"
            :options="typeOptions"
          ></a-segmented>
        </a-flex>
        <a-card class="mt-8">
          <ul>
            <template v-for="item in list" :key="item.websiteId">
              <a-tooltip :title="item.name">
                <li
                  class="flex flex-s"
                  @dblclick="
                    gotoUrl(item.url);
                    visible = false;
                  "
                  @click="selectItem(item.url)"
                  :class="{ active: currentSrc === item.url }"
                >
                  <img :src="item.icon || getFavicon(item.url)" width="32" />
                </li>
              </a-tooltip>
            </template>
          </ul>
        </a-card>
      </a-card>
    </template>
  </a-popover>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import type { SystemWebsite } from '@/api/modules/system/website/types';
import { fetchWebsiteList } from '@/api/modules/system/website/website';
import { getFavicon } from '@/api/utils/image';
import { typeOptions, typeOptionsFetch } from '@/views/modules/system/website/data/options';
import { gotoUrl } from '../../data/browser.methods';

const currentSrc = ref<string>('');

const list = ref<SystemWebsite[]>([]);

const visible = ref(false);
const query = ref<IQuery>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  type: 'image',
});

const pageChange = (pageNum: number, pageSize: number) => {
  query.value.pageNum = pageNum;
  query.value.pageSize = pageSize;
  getList();
};
onMounted(async () => {
  if (!typeOptions.value) {
    await typeOptionsFetch();
  }
});

const changeType = () => {
  query.value.pageNum = 1;
  getList();
};
const getList = async () => {
  const { data } = await fetchWebsiteList(query.value);
  if (data.rows) {
    list.value = data.rows;
    query.value.total = data.total;
  }
};
const selectItem = (item: string) => {
  currentSrc.value = item;
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

<template>
  <a-popover trigger="click" placement="bottomRight">
    <div class="system__icon star relative" @click="getList">
      <StarOutlined />
    </div>
    <template #content>
      <a-card style="width: 500px" title="网页收藏夹">
        <template #extra>
          <a-pagination></a-pagination>
        </template>
        <a-flex :gap="8">
          <a-segmented
            @change="getList"
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
                  @dblclick="gotoUrl(item.url)"
                  @click="selectItem(item.url)"
                  :class="{ active: currentSrc === item.url }"
                >
                  <img :src="getFavicon(item.url)" width="32" />
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

const query = ref<IQuery>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  type: 'image',
});

const getList = async () => {
  await typeOptionsFetch();
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

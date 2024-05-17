<template>
  <a-popover trigger="click" placement="bottomRight" v-model:open="visible">
    <div class="system__icon star relative" @click="getList">
      <StarOutlined />
    </div>
    <template #content>
      <a-card style="width: 400px" title="网页收藏夹">
        <a-flex :justify="'space-between'" :align="'center'" class="pb-8">
          <a-flex :gap="8">
            <a-select
              @change="changeType"
              v-model:value="query.type"
              :options="typeOptions"
            ></a-select>
          </a-flex>
          <a-pagination
            :current="query.pageNum"
            :pageSize="query.pageSize"
            :total="query.total"
            @change="pageChange"
          ></a-pagination>
        </a-flex>
        <ul class="list">
          <template v-for="item in list" :key="item.websiteId">
            <a-tooltip :title="item.name">
              <li
                class="flex flex-s"
                @dblclick="openLink(item)"
                @click="selectItem(item.url)"
                :class="{ active: currentSrc === item.url }"
              >
                <img :src="getIcon(item)" width="32" />
              </li>
            </a-tooltip>
          </template>
        </ul>
      </a-card>
    </template>
  </a-popover>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import type { SystemWebsite } from '@/api/modules/system/website/types';
import { fetchWebsiteList } from '@/api/modules/system/website/website';
import { getFavicon, getStaticImage } from '@/api/utils/image';
import { getDictOption } from '@/global/data/dict';
import { typeOptions } from '@/views/modules/system/website/data/options';
import { enterUrl } from '../../data/browser.methods';

const currentSrc = ref<string>('');

const list = ref<SystemWebsite[]>([]);

const visible = ref(false);
const query = ref<IQuery>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  type: 'image',
});

const getIcon = (item: SystemWebsite) => {
  if (item.icon) {
    return getStaticImage(item.icon);
  }
  return getFavicon(item.url);
};
const pageChange = (pageNum: number, pageSize: number) => {
  query.value.pageNum = pageNum;
  query.value.pageSize = pageSize;
  getList();
};
onMounted(async () => {
  typeOptions.value = await getDictOption('website_type');
});
const openLink = (item: SystemWebsite) => {
  enterUrl(item.url, item.name);
  visible.value = false;
};
const changeType = () => {
  query.value.pageNum = 1;
  getList();
};
const getList = async () => {
  const { data } = await fetchWebsiteList(query.value);
  if (data.rows) {
    console.log(list.value);

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

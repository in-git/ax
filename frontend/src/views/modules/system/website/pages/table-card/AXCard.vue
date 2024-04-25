<template>
  <a-card class="table__card">
    <ul class="table_card_list flex-1" ref="cardRef" v-show="websiteTable.data.length > 0">
      <li
        :draggable="true"
        v-for="item in websiteTable.data"
        :key="item.websiteId"
        @dblclick="openLink(item.url)"
        @click="selectItem(item)"
        :class="{ active: websiteKeys.includes(item.websiteId) }"
      >
        <img :src="`https://favicon.qqsuu.cn/${item.url}`" width="36" height="36" />
        <a-flex class="flex-1" vertical :gap="2">
          <a-flex justify="space-between">
            <div class="site-title">
              {{ item.name }}
            </div>
            <div class="text-right">
              <a-button target="_blank" :href="restoreDomain(item.url)" type="link" class="open">
                打开
              </a-button>
            </div>
          </a-flex>
          <div class="system__subtitle">
            {{ item.description }}
          </div>
        </a-flex>
      </li>
    </ul>

    <a-empty v-show="websiteTable.data.length === 0" />
  </a-card>
</template>

<script setup lang="ts">
import type { SystemWebsite } from '@/api/modules/system/website/types';
import { openLink } from '@/utils/common/utils';
import { useSortable } from '@vueuse/integrations/useSortable';
import { websiteCardData } from '../../data/card';
import { websiteKeys, websiteTable } from '../../data/table';

const cardRef = ref();

interface SortConfig {
  oldIndex: number;
  newIndex: number;
}
function restoreDomain(domain: string, protocol: string = 'http'): string {
  // 如果域名已经包含了协议，则直接返回
  if (domain.startsWith('http://') || domain.startsWith('https://')) {
    return domain;
  }

  // 如果域名不包含协议，则拼接成完整的 URL
  return `${protocol}://${domain}/`;
}

const selectItem = (item: SystemWebsite) => {
  if (websiteKeys.value.includes(item.websiteId)) {
    websiteKeys.value = websiteKeys.value.filter(e => e !== item.websiteId);
  } else {
    websiteKeys.value.push(item.websiteId);
  }
};
nextTick(() => {
  useSortable(cardRef, websiteCardData.value, {
    animation: 200,
    onUpdate(e: SortConfig) {
      // console.log(e.oldIndex, e.newIndex);
    },
  });
});
</script>

<style lang="scss" scoped>
.table_card_list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(fit-content, 1fr));

  li {
    display: flex;
    padding: 8px;
    column-gap: 8px;
    height: 80px;
    cursor: pointer;
    border: 1px solid transparent;
    max-width: 220px;
    &:hover {
      color: black;
      background: var(--color-primary-hover-bg);
    }
    border-radius: var(--radius);
    img {
      border-radius: var(--radius);
      background: var(--color-background);
      border: 1px solid #ddd;
      padding: 2px;
    }
  }
  li.active {
    border: 1px solid var(--primary);
  }
  .site-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
  }
  .system__subtitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2; /* 指定要显示的行数 */
  }
  .open {
    &:hover {
      background-color: var(--primary);
      color: white;
    }
  }
}
</style>

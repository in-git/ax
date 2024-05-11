<template>
  <a-card class="table__card" :loading="websiteTable.loading">
    <ul class="table_card_list flex-1" ref="cardRef" v-show="websiteTable.data.length > 0">
      <li
        :draggable="true"
        v-for="item in websiteTable.data"
        :key="item.websiteId"
        @dblclick="openLink(item.url)"
        @click="selectItem(item)"
        :class="{ active: websiteKeys.includes(item.websiteId!) }"
      >
        <a-flex class="flex-1" vertical :gap="2">
          <a-flex :gap="8" :align="'center'" :justify="'space-between'">
            <img :src="getIcon(item)" width="32" height="32" />
            <div class="site-title flex-1">{{ item.name }}{{ item.icon }}</div>
            <a-flex class="actions">
              <div class="text-right flex gc-4">
                <a-tooltip title="内部浏览器打开">
                  <a-button @click="open(item)" type="link" class="open">
                    <GoogleOutlined />
                  </a-button>
                </a-tooltip>
                <a-tooltip title="外部浏览器打开">
                  <a-button
                    target="_blank"
                    :href="restoreDomain(item.url)"
                    type="link"
                    class="open"
                  >
                    <LinkOutlined />
                  </a-button>
                </a-tooltip>
              </div>
            </a-flex>
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
import { getFavicon, getStaticImage } from '@/api/utils/image';
import { openLink } from '@/utils/common/utils';
import { openInternet } from '@/views/widget/browser/data/browser.methods';
import type { GoogleOutlined } from '@ant-design/icons-vue';
import { useSortable } from '@vueuse/integrations/useSortable';
import { websiteCardData } from '../../data/card';
import { websiteKeys, websiteTable } from '../../data/table';

const cardRef = ref();

interface SortConfig {
  oldIndex: number;
  newIndex: number;
}
const getIcon = (item: SystemWebsite) => {
  if (item.icon) {
    return getStaticImage(item.icon);
  }
  return getFavicon(item.url);
};
const restoreDomain = (domain: string, protocol: string = 'http'): string => {
  // 如果域名已经包含了协议，则直接返回
  if (domain.startsWith('http://') || domain.startsWith('https://')) {
    return domain;
  }

  // 如果域名不包含协议，则拼接成完整的 URL
  return `${protocol}://${domain}/`;
};

const selectItem = (item: SystemWebsite) => {
  websiteKeys.value = [];
  websiteKeys.value.push(item.websiteId!);
};
const open = (item: SystemWebsite) => {
  openInternet({
    icon: item.icon || getFavicon(item.url),
    src: item.url,
    title: item.name,
    id: `${item.websiteId}`,
  });
};
nextTick(() => {
  useSortable(cardRef, websiteCardData.value, {
    animation: 200,
    onUpdate(e: SortConfig) {},
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
    .actions {
      opacity: 0;
      transition: var(--transition);
    }
    &:hover {
      .actions {
        opacity: 1;
      }
    }
  }
  li.active {
    border: 1px solid var(--primary);
  }
  .site-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
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

<template>
  <a-card class="table__card">
    <ul class="table_card_list flex-1" ref="cardRef" v-if="websiteTable.data.length > 0">
      <li v-for="item in websiteTable.data" :key="item.websiteId">
        <img :src="`https://favicon.qqsuu.cn/${item.url}`" width="36" height="36" alt="" />
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

          <div class="system-subtitle">
            {{ item.description }}
          </div>
        </a-flex>
      </li>
    </ul>
    <a-empty v-else />
  </a-card>
</template>

<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable';
import { websiteCardData } from '../../data/card';
import { websiteTable } from '../../data/table';

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
    max-width: 220px;
    &:hover {
      background: #f8f5f2;
    }
    img {
      border-radius: var(--radius);
    }
  }
  .site-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
  }
  .system-subtitle {
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

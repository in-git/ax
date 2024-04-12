<template>
  <div class="table-card flex-1 flex flex-col">
    <CardHead />

    <ul class="table-card-list flex-1">
      <li
        v-for="(item, key) in cardData"
        :key="key"
        size="small"
        @click="selectItem(item)"
        :class="{ active: websiteKeys.includes(item.id) }"
        @dblclick="websiteEdit(item.id)"
      >
        <a-card>
          <div class="index">{{ key + 1 }}</div>

          <a-card-meta title="Europe Street beat" class="mb-8">
            <template #description>www.wind.com</template>
          </a-card-meta>
          <a-descriptions
            :column="1"
            layout="horizontal"
            :labelStyle="{ width: '80px', color: '#666' }"
          >
            <a-descriptions-item
              :label="v.label"
              :contentStyle="{ fontWeight: k === 0 ? 'bold' : '' }"
              v-for="(v, k) in item.items"
            >
              {{ v.value }}
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </li>
    </ul>
    <div class="card-footer px-12 flex align-center">
      <a-pagination
        :total="websiteQuery.total"
        :current="websiteQuery.pageNum"
        :page-size="websiteQuery.pageSize"
        show-size-changer
        @change="pageChange"
      ></a-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { websiteColumns } from '../data/column';
import { websiteEdit, websiteList } from '../data/curd';
import { websiteKeys, websiteQuery, websiteTable } from '../data/table';
import CardHead from './Head.vue';

interface Item {
  id: number;
  items: {
    label: string;
    value: any;
  }[];
}

const selectItem = (item: Item) => {
  if (!websiteKeys.value.includes(item.id)) {
    websiteKeys.value.push(item.id);
  } else {
    websiteKeys.value = websiteKeys.value.filter(e => e !== item.id);
  }
};

const pageChange = (page: number, pageSize: number) => {
  websiteQuery.value.pageNum = page;
  websiteQuery.value.pageSize = pageSize;
  websiteList();
};

const cardData = computed(() => {
  let arr: Item[] = [];
  websiteTable.value.data.map((e: any, i) => {
    let items: any = [];
    websiteColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e.websiteId,
      items,
    });
  });
  return arr;
});
</script>

<style lang="scss" scoped>
$width: 200px;
.table-card-list {
  display: flex;
  padding: 12px;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: auto;
  height: 100%;
  place-content: start;
  li {
    height: fit-content;
    flex: 1;
    width: $width;
    max-width: $width;
  }
}
:deep(td.ant-descriptions-item) {
  padding-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  max-width: $width - 80px;
  text-overflow: ellipsis;
}
div.index {
  $wh: 24px;
  width: $wh;
  height: $wh;
  border-radius: 50%;
  line-height: $wh;
  border: 1px solid var(--primary);
  color: var(--primary);
  text-align: center;
  position: absolute;
  background: white;
  right: -10px;
  top: -10px;
  z-index: 10;
}
li.active {
  div.index {
    border: 1px solid #ddd;
    background: var(--primary);
    color: white;
  }
}
.card-footer {
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 36px;
  background: white;
  border-top: 1px solid #ddd;
}
</style>

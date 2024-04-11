<template>
  <div class="table-card">
    <CardHead />
    <ul class="table-card-list">
      <li
        v-for="(item, key) in cardData"
        :key="key"
        size="small"
        @click="selectItem(item)"
        :class="{ active: websiteKeys.includes(item.id) }"
      >
        <a-card>
          <div class="index">{{ key + 1 }}</div>

          <a-card-meta title="Europe Street beat" class="mb-8">
            <template #description>www.win.com</template>
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
  </div>
</template>

<script setup lang="ts">
import { websiteColumns } from '../data/column';
import { websiteKeys, websiteTable } from '../data/table';
import CardHead from '../head/head.vue';

interface Item {
  id: number;
  items: {
    label: string;
    value: any;
  }[];
}

const selectItem = (item: Item) => {
  websiteKeys.value.push(item.id);
  console.log(websiteKeys.value);
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
  display: grid;
  padding: 12px;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax($width, 1fr));
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
}
li.active {
  div.index {
    border: 1px solid #ddd;
    background: var(--primary);
    color: white;
  }
}
</style>

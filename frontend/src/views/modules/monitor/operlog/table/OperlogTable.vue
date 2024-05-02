<template>
  <div class="operlog-table h-100 flex flex-col">
    <OperlogHead />
    <a-card class="data flex-1" :bodyStyle="{ height: '100%' }" :loading="operLogConf.loading">
      <ul v-if="operLogConf.data.length > 0">
        <li v-for="(item, key) in operLogConf.data" :key="key" @click="selectItem(item)">
          <a-card :class="{ active: item === current }">
            <a-space class="w-100 text-center" direction="vertical">
              <div>
                <a-flex :justify="'space-between'" vertical>
                  <div class="text-16 mb-4 title">{{ item.title }}</div>
                  <div class="system__subtitle text-12">{{ item.operTime }}</div>
                </a-flex>
              </div>

              <div>
                <a-descriptions
                  :column="1"
                  size="small"
                  :labelStyle="{ width: '60px' }"
                  :contentStyle="{ justifyContent: 'right' }"
                >
                  <a-descriptions-item label="状态">
                    <div style="line-height: 18px">
                      <a-badge :color="getStatus(`${item.status}`).color"></a-badge>
                      <span class="text-12">
                        {{ getStatus(`${item.status}`).text }}
                      </span>
                    </div>
                  </a-descriptions-item>
                  <a-descriptions-item label="操作员">{{ item.operName }}</a-descriptions-item>
                  <a-descriptions-item label="耗时 ">{{ item.costTime }}ms</a-descriptions-item>
                </a-descriptions>
              </div>
            </a-space>
          </a-card>
        </li>
      </ul>
      <a-empty v-else></a-empty>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { Operlog } from '@/api/modules/monitor/operlog/types';
import { getLogs } from '../data/curd';
import { operLogConf } from '../data/data';
import OperlogHead from './OperlogHead.vue';
const current = ref<Operlog>();

onMounted(async () => {
  await getLogs();
});
const selectItem = (item: Operlog) => {
  current.value = item;
};
const getStatus = (status: string) => {
  return status === '1'
    ? {
        color: 'red',
        text: '失败',
      }
    : {
        color: 'green',
        text: '成功',
      };
};
</script>

<style lang="scss" scoped>
.operlog-table {
  $width: 140px;
  .data {
    overflow-y: auto;
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax($width, 1fr));
      gap: 8px;
      li {
        cursor: pointer;
      }
    }
  }
  .active {
    border: 1px solid var(--primary) !important;
    .title {
      text-shadow: 0 0 1px #00000056;
    }
  }
}
</style>

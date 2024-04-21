<template>
  <div class="operlog-table h-100 flex flex-col">
    <OperlogHead />
    <a-card class="data flex-1">
      <template v-if="!operLogConf.loading">
        <ul v-if="operLogConf.data.length > 0">
          <li
            class="card"
            v-for="(item, key) in operLogConf.data"
            :key="key"
            @click="selectItem(item)"
            :class="{ active: item === current }"
          >
            <a-space class="w-100 text-center" direction="vertical">
              <div>
                <ImageType :type="item.businessType" />
                <!-- <img width="32" height="32" :src="logSuccess" v-if="`${item.status}` === '0'" />
                <img width="32" height="32" :src="logError" v-else /> -->
              </div>
              <div>
                <div class="flex flex-col justify-between">
                  <div class="text-16 mb-4 title">{{ item.title }}</div>
                  <div class="system__subtitle text-12">{{ item.operTime }}</div>
                </div>
              </div>

              <div>
                <a-descriptions
                  :column="3"
                  size="small"
                  layout="vertical"
                  :labelStyle="{ color: '#999' }"
                  :contentStyle="{ fontSize: '12px' }"
                >
                  <a-descriptions-item label="Status">
                    <div style="line-height: 18px">
                      <a-badge :color="getStatus(`${item.status}`).color"></a-badge>
                      <span class="text-12">
                        {{ getStatus(`${item.status}`).text }}
                      </span>
                    </div>
                  </a-descriptions-item>
                  <a-descriptions-item label="Stuff">{{ item.operName }}</a-descriptions-item>
                  <a-descriptions-item label="Time ">{{ item.costTime }}ms</a-descriptions-item>
                </a-descriptions>
              </div>
            </a-space>
          </li>
        </ul>
        <a-empty v-else></a-empty>
      </template>

      <Loading v-else class="w-100 h-100" />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { Operlog } from '@/api/modules/monitor/operlog/types';
import Loading from '@/components/loading/Loading.vue';
import { getLogs } from '../data/curd';
import { operLogConf } from '../data/data';
import OperlogHead from './head/OperlogHead.vue';
import ImageType from './ImageType.vue';
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
        text: 'err',
      }
    : {
        color: 'green',
        text: 'run',
      };
};
</script>

<style lang="scss" scoped>
.operlog-table {
  $width: 160px;
  .data {
    background: #f0f6f8;
    overflow-y: auto;
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax($width, 1fr));
      gap: 8px;
      li {
        cursor: pointer;
        width: 100%;
        border: 1px solid transparent;
        max-width: $width;
      }
    }
  }
  .card {
    padding: 8px;
    background: white;
  }
  .more {
    background: #f8f8f8;
    border-radius: var(--radius);
    line-height: 28px;
    padding: 0 12px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
  .active {
    border: 1px solid var(--primary) !important;
    .title {
      text-shadow: 0 0 1px #00000056;
    }
  }
}
.footer {
  height: 36px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
}
</style>
../data/data

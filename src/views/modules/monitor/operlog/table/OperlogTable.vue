<template>
  <div class="operlog-table h-100 flex flex-col px-8">
    <OperlogHead />
    <div class="data p-8 flex-1">
      <template v-if="!operLogConf.loading">
        <ul v-if="operLogConf.data.length > 0">
          <li
            class="card"
            v-for="(item, key) in operLogConf.data"
            :key="key"
            @click="selectItem(item)"
            :class="{ active: item === current }"
          >
            <a-space class="w-100" direction="vertical">
              <div class="flex">
                <img width="32" height="32" :src="logSuccess" v-if="`${item.status}` === '0'" />
                <img width="32" height="32" :src="logError" v-else />
                <div class="flex flex-col justify-between ml-8">
                  <div class="text-16 mb-4 title">{{ item.title }}</div>
                  <div class="text-999 text-12">{{ item.operTime }}</div>
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
    </div>
    <div class="footer flex justify-right">
      <a-pagination
        @change="change"
        v-model:current="logQuery.pageNum"
        :total="logQuery.total"
        show-less-items
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Operlog } from '@/api/modules/monitor/operlog/types';
import Loading from '@/components/loading/Loading.vue';
import logError from '../../assets/log-error.png';
import logSuccess from '../../assets/log-success.png';
import { getLogs, logQuery, operLogConf } from './data';
import OperlogHead from './head/OperlogHead.vue';
const current = ref<Operlog>();

const change = (page: number, pageSize: number) => {
  logQuery.value.pageNum = page;
  logQuery.value.pageSize = pageSize;
  getLogs();
};
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
  $width: 180px;
  .data {
    background: #f0f6f8;
    overflow-y: auto;
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax($width, 1fr));
      gap: 8px;
      li {
        width: 100%;
        border-bottom: 2px solid transparent;
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
    border-bottom: 2px solid var(--primary) !important;
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

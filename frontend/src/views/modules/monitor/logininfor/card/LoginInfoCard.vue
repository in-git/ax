<template>
  <div class="log-card flex-1">
    <a-spin :spinning="loginLogData.loading">
      <ul class="p-12 list">
        <li v-for="(item, key) in loginLogData.data" :key="key">
          <a-space class="w-100" direction="vertical">
            <img :src="applePng" width="32" v-if="item.os.includes('Mac OS X')" />
            <img v-else-if="item.os.includes('Windows 10')" :src="windowsPng" width="32" />
            <img v-else="item.os.includes('Windows 10')" :src="serverPng" width="32" />
            <div class="text-bold text-14">{{ item.userName || 'NUll' }}</div>
            <div>{{ item.ipaddr || 'NUll' }}</div>

            <div v-if="item.status === '0'">
              <a-badge dot color="green"></a-badge>
              <span class="text-12">成功</span>
            </div>
            <div v-else>
              <a-badge dot color="red"></a-badge>
              <span class="text-12">失败</span>
            </div>
            <div class="text-12">{{ item.loginLocation || 'NUll' }}</div>
            <div class="text-12">{{ item.loginTime || 'NUll' }}</div>
          </a-space>
        </li>
      </ul>
    </a-spin>

    <div class="system-footer text-right">
      <a-pagination
        :total="loginLogQuery.total"
        v-model:current="loginLogQuery.pageNum"
        show-quick-jumper
        show-size-changer
        :page-size="loginLogQuery.pageSize"
        @change="pageSizeChange"
      ></a-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import applePng from '../assets/apple.png';
import serverPng from '../assets/devices.png';
import windowsPng from '../assets/windows.png';
import { loadLoginList, loginLogData, loginLogQuery, pageSizeChange } from './data';
onMounted(() => {
  loadLoginList();
});
</script>

<style lang="scss" scoped>
ul.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 0.1fr));
  gap: 8px;
  li {
    border: 1px solid #ddd;
    text-align: center;
    padding: 8px 0;
    color: #999;
  }
}
.log-card {
  overflow-y: auto;
}
.footer {
  position: sticky;
  bottom: 0;
  background: white;
  width: 100%;
  z-index: 100;
  padding: 8px 0;
  border-top: 1px solid #ddd;
}
</style>

import { monitorServer } from '@/api/modules/monitor/server/server';

export const serverLoading = ref(true);
export const serverInfo = ref<SystemServer>();

/* 获取服务器信息 */
export const getServerInfo = async () => {
  const { data } = await monitorServer();
  if (data.data) serverInfo.value = data.data;
  serverLoading.value = false;
};

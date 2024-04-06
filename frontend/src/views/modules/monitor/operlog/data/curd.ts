import { listOperLog } from '@/api/modules/monitor/operlog/operlog';
import { logQuery, operLogConf } from './data';

export const getLogs = async () => {
  operLogConf.value.loading = true;
  const { data } = await listOperLog(logQuery.value);
  operLogConf.value.data = data.rows;
  operLogConf.value.loading = false;
  logQuery.value.total = data.total;
};

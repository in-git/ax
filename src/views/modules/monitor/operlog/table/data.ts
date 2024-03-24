import type { IQuery } from '@/api/config/types';
import { listOperLog } from '@/api/modules/monitor/operlog/operlog';
import type { Operlog } from '@/api/modules/monitor/operlog/types';

interface logQuery {
  businessType: string;
  status: '1' | '0' | '';
}

export const logQuery = ref<IQuery<logQuery>>({
  pageNum: 1,
  pageSize: 25,
  businessType: '',
  status: '',
});
interface OperLogConf {
  data: Operlog[];
  loading: boolean;
}

export const operLogConf = ref<OperLogConf>({
  data: [],
  loading: false,
});

export const getLogs = async () => {
  operLogConf.value.loading = true;
  const { data } = await listOperLog(logQuery.value);
  operLogConf.value.data = data.rows;
  operLogConf.value.loading = false;
};

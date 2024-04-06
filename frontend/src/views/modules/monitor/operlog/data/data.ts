import type { IQuery } from '@/api/config/types';
import type { Operlog } from '@/api/modules/monitor/operlog/types';

interface logQuery {
  businessType: string;
}

export const logQuery = ref<IQuery<logQuery>>({
  pageNum: 1,
  pageSize: 25,
  businessType: '',
  status: '',
  total: 0,
  params: undefined,
});
interface OperLogConf {
  data: Operlog[];
  loading: boolean;
}

export const operLogConf = ref<OperLogConf>({
  data: [],
  loading: false,
});

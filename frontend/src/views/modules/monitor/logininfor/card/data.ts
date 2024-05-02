import type { IQuery } from '@/api/config/types';
import { loginLogList } from '@/api/modules/monitor/logininfor/logininfor';

interface LoginLogData {
  data: LoginLog[];
  selectedKeys: string[];
  loading: boolean;
}
interface LogQuery {
  ipaddr: string;
  userName: string;
}

export const loginLogData = ref<LoginLogData>({
  data: [],
  selectedKeys: [],
  loading: false,
});

export const loginLogQuery = ref<IQuery<LogQuery>>({
  pageSize: 50,
  pageNum: 1,
  total: 0,
  ipaddr: '',
  userName: '',
});

export const loadLoginList = async () => {
  loginLogData.value.loading = true;
  try {
    const { data } = await loginLogList(loginLogQuery.value);
    if (data.rows) {
      loginLogData.value.data = data.rows;
      loginLogQuery.value.total = data.total;
    }
    loginLogData.value.loading = false;
  } catch (error) {
    loginLogData.value.loading = false;
  }
};

export const pageSizeChange = (pageNum: number, pageSize: number) => {
  loginLogQuery.value.pageNum = pageNum;
  loginLogQuery.value.pageSize = pageSize;
  loadLoginList();
};

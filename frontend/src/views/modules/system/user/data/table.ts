import type { IQuery, TableConfig } from '@/api/config/types';
import type { UserDept, UserProfileData } from '@/api/modules/system/user/types';

//查询参数接口
interface UserQuery {
  userName: string;
  nickName: string;
  email: string;
  phonenumber: string;
  sex: string;
  status: string;
  deptId: number | undefined;
}

let queryObj: IQuery<UserQuery> = {
  pageNum: 1,
  pageSize: 10,
  total: 0,
  userName: '',
  nickName: '',
  email: '',
  phonenumber: '',
  sex: '',
  status: '',
  deptId: undefined,
};

// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

// 已选中的元素数组
export const userKeys = ref<number[]>([]);

export const userTable = ref<TableConfig<UserProfileData>>({
  //勾选的唯一标识,数据库主键
  rowKey: 'userId',
  data: [],
  loading: false,
  //必须唯一，存储窗口位置，表头等
  moduleName: 'SystemUser',
});

//查询参数
export const userQuery = ref<IQuery<UserQuery>>({
  ...queryObj,
});

export const resetUserQuery = () => {
  userQuery.value = {
    ...queryObj,
  };
};

export const deptTreeData = ref<UserDept[]>([]);

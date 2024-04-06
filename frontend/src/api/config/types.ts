/* 请求钩子函数方法 */

export type IOption = {
  label: string;
  value: string | number;
};

export type CreateTime = {
  beginTime: string;
  endTime: string;
};

/* 查询条件 */
export type IQuery<T = Record<string, any> | undefined> = {
  pageNum: number;
  pageSize: number;
  /* 创建时间 */
  createTime?: string | CreateTime;
  isAsc?: 'asc' | 'desc';
  /* 筛选状态 */
  status?: '0' | '1' | string;
  params?: {
    beginTime?: string;
    endTime?: string;
  };
  orderByColumn?: string;
  total: number;
} & T;

/* 带分页数据列表的返回 */
export interface TableResponse<T> {
  total: number;
  rows: T[];
  code: number;
  msg: string;
}

/* 不分页的数据列表返回 */
export interface IDataResponse<T> {
  data: T[];
  msg: string;
  code: 200 | 500;
}

/* 统一反馈 */
export interface Response<T = undefined> {
  msg: string;
  code: number;
  data?: T;
}

export type FormEvent = {
  values: Record<string, any>;
  errors: Record<string, any> | undefined;
};

export interface TableConfig {
  rowKey: string;
  data: any[];
  loading: boolean;
  /* 模块名，用于存储表头，必须唯一 */
  moduleName: string;
}

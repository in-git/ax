/* 请求钩子函数方法 */
export type ApiMethod = 'afterEdit' | 'beforeCreate' | 'beforeEdit' | 'init';

export interface ApiHooks {
  [key: string]: () => any;
}

export type IOption = {
  label: string;
  value: string | number;
};

/* 查询条件 */
export type IQuery<T = Record<string, any> | undefined> = {
  pageNum?: number;
  pageSize?: number;
  /* 创建时间 */
  createTime?: string;
  isAsc?: 'asc' | 'desc';
  /* 筛选状态 */
  status?: '0' | '1' | string;
  params?: {
    beginTime?: string;
    endTime?: string;
  };
  orderByColumn?: string;
  total?: number;
} & T;
/* 带分页数据列表的返回 */
export interface ITableResponse<T> {
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
export interface Feedback<T = undefined> {
  msg: string;
  code: number;
  data?: T;
}

export type FormEvent = {
  values: Record<string, any>;
  errors: Record<string, any> | undefined;
};

export type ConfigFilter = {
  /* 是否允许用时间进行搜索 */
  allowTimeQuery?: boolean;
  /* 是否开启状态筛选 */
  status?: boolean;
};

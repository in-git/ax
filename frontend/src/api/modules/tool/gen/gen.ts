import type { IQuery, Response, TableResponse } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import axios from 'axios';

export const fetchCodeList = (query: IQuery) => {
  return axios.get<TableResponse<SystemTable>>(`tool/gen/list`, { params: query });
};

export const fetchCodeById = (id: number) => {
  return axios.get<Response<CodeResponse>>(`tool/gen/${id}`);
};

export const createCode = (data: any) => {
  return axios.post<Response>(`tool/gen`, data);
};

export const updateCode = (data: any) => {
  return axios.put<Response>(`tool/gen`, data);
};

export const deleteCodeByIds = (ids: string) => {
  return axios.delete<Response>(`tool/gen/${ids}`);
};
// 同步代码
export const synchDb = (db: string) => {
  return axios.get(`tool/gen/synchDb/${db}`);
};

export const fetchGenDbList = (query: IQuery) => {
  return axios.get(`tool/gen/db/list`, {
    params: query,
  });
};

/* 导入表的数据 */
export const importDbByDbs = (dbs: string[]) => {
  return axios.post(`tool/gen/importTable?tables=${dbs.join(',')}`);
};

/* 导入表的数据 */
export const batchGenCode = (tables: string[]) => {
  return exportFile({
    url: `tool/gen/batchGenCode?tables=${tables.join(',')}`,
    data: undefined,
    fileName: `code-${new Date().getTime()}.zip`,
    method: 'GET',
  });
};

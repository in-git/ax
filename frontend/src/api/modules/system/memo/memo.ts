import type { IQuery, Response, TableResponse } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import { message } from 'ant-design-vue';
import axios from 'axios';
import type { SystemMemo } from './types';

// 查询备忘录列表
export const fetchMemoList = (query: IQuery) => {
  return axios.get<TableResponse<SystemMemo>>(`system/memo/list`, {
    params: query,
  });
};
// 查询备忘录详细
export const fetchMemoById = (memoId: number) => {
  return axios.get<Response<SystemMemo>>(`system/memo/${memoId}`);
};

// 新增备忘录
export const createMemo = (data: Partial<SystemMemo>) => {
  return axios.post<Response<SystemMemo>>(`system/memo`, data);
};

// 修改备忘录
export const updateMemo = (data: SystemMemo) => {
  return axios.put<Response<SystemMemo>>(`system/memo`, data);
};

// 删除备忘录
export const deleteMemo = (memoIds: number[]) => {
  return axios.delete<Response<SystemMemo>>(`system/memo/${memoIds.join(',')}`);
};

interface Page {
  pageNum: number;
  pageSize: number;
}

// 导出备忘录
export const exportMemo = async (page: Page) => {
  await exportFile({
    url: 'system/memo/export',
    data: page,
    fileName: '备忘录.xls',
    method: 'POST',
  });
  message.success(`成功下载`);
};

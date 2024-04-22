import type { IQuery, Response, TableResponse } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import { message } from 'ant-design-vue';
import axios from 'axios';
import type { SystemFeedback } from './types';

// 查询系统反馈列表
export const fetchFeedbackList = (query: IQuery) => {
  return axios.get<TableResponse<SystemFeedback>>(`system/feedback/list`, {
    params: query,
  });
};
// 查询系统反馈详细
export const fetchFeedbackById = (feedbackId: number) => {
  return axios.get<Response<SystemFeedback>>(`system/feedback/${feedbackId}`);
};

// 新增系统反馈
export const createFeedback = (data: Partial<SystemFeedback>) => {
  return axios.post<Response<SystemFeedback>>(`system/feedback`, data);
};

// 修改系统反馈
export const updateFeedback = (data: SystemFeedback) => {
  return axios.put<Response<SystemFeedback>>(`system/feedback`, data);
};

// 删除系统反馈
export const deleteFeedback = (feedbackIds: number[]) => {
  return axios.delete<Response<SystemFeedback>>(`system/feedback/${feedbackIds.join(',')}`);
};

type Page = {
  pageSize: number;
  pageNum: number;
};
// 导出系统反馈
export const exportFeedback = async (page: Page) => {
  await exportFile({
    url: 'system/feedback/export',
    data: page,
    fileName: '系统反馈.xls',
    method: 'POST',
  });
  message.success(`成功下载`);
};

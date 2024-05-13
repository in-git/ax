import type { IQuery, Response, TableResponse } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import { message } from 'ant-design-vue';
import axios from 'axios';
import type { SystemJob } from './types';

export const fetchJobList = (query: IQuery) => {
  return axios.get<TableResponse<SystemJob>>(`monitor/job/list`, { params: query });
};

// 删除定时任务
export const deleteJob = (ids: number[]) => {
  return axios.delete<Response>(`monitor/job/${ids.join(',')}`);
};

interface JobRun {
  jobId: number;
  jobGroup: string;
}
/* 执行一次 */
export const jobRun = (data: JobRun) => {
  return axios.put<Response>(`monitor/job/run`, {
    data,
  });
};
/* 任务详细 */
export const fetchJobById = (id: string) => {
  return axios.get<Response<SystemJob>>(`monitor/job/${id}`);
};

type Page = {
  pageSize: number;
  pageNum: number;
};

// 导出定时任务调度
export const exportJob = async (page: Page) => {
  await exportFile({
    url: 'system/job/export',
    data: page,
    fileName: '定时任务调度.xls',
    method: 'POST',
  });
  message.success(`成功下载`);
};

// 新增定时任务调度
export const createJob = (data: SystemJob) => {
  return axios.post<Response<SystemJob>>(`system/job`, data);
};

// 修改定时任务调度
export const updateJob = (data: SystemJob) => {
  return axios.put<Response<SystemJob>>(`system/job`, data);
};

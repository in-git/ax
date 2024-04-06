import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';

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
export const jobInfo = (id: number) => {
  return axios.get<Response<SystemJob>>(`monitor/job/${id}`);
};


import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type {SystemNotice} from "./types"
import { message } from 'ant-design-vue';
import { exportFile } from '@/api/utils/file';

// 查询通知公告列表
export const fetchNoticeList = (query: IQuery) => {
  return axios.get<TableResponse<SystemNotice>>(`system/notice/list`, {
    params: query,
  });
};
// 查询通知公告详细
export const fetchNoticeById = (noticeId: number) => {
  return axios.get<Response<SystemNotice>>(`system/notice/${noticeId}`);
};

// 新增通知公告
export const createNotice= (data: SystemNotice) => {
  return axios.post<Response<SystemNotice>>(`system/notice`, data);
};

// 修改通知公告
export const updateNotice = (data: SystemNotice) => {
  return axios.put<Response<SystemNotice>>(`system/notice`, data);
};

// 删除通知公告
export const deleteNotice = (noticeIds:number[]) => {
  return axios.delete<Response<SystemNotice>>(`system/notice/${noticeIds.join(',')}`);
};

type Page = {
  pageSize: number;
  pageNum: number;
};

// 导出通知公告
export const exportNotice = async (page: Page) => {
  await exportFile({
    url: 'system/notice/export',
    data: page,
    fileName: '通知公告.xls',
    method: 'POST',
  });
  message.success(`成功下载`);
};

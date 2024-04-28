
import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type {SystemTest} from "./types"
import { message } from 'ant-design-vue';
import { exportFile } from '@/api/utils/file';

// 查询系统测试表列表
export const fetchTestList = (query: IQuery) => {
  return axios.get<TableResponse<SystemTest>>(`system/test/list`, {
    params: query,
  });
};
// 查询系统测试表详细
export const fetchTestById = (testId: number) => {
  return axios.get<Response<SystemTest>>(`system/test/${testId}`);
};

// 新增系统测试表
export const createTest= (data: SystemTest) => {
  return axios.post<Response<SystemTest>>(`system/test`, data);
};

// 修改系统测试表
export const updateTest = (data: SystemTest) => {
  return axios.put<Response<SystemTest>>(`system/test`, data);
};

// 删除系统测试表
export const deleteTest = (testIds:number[]) => {
  return axios.delete<Response<SystemTest>>(`system/test/${testIds.join(',')}`);
};

type Page = {
  pageSize: number;
  pageNum: number;
};

// 导出系统测试表
export const exportTest = async (page: Page) => {
  await exportFile({
    url: 'system/test/export',
    data: page,
    fileName: '系统测试表.xls',
    method: 'POST',
  });
  message.success(`成功下载`);
};

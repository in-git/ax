import type { IQuery, Response } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import { message } from 'ant-design-vue';
import axios from 'axios';
import type { SystemMenu } from './types';

/**
 * @description: 查询菜单权限列表
 * @param {IQuery} query 系统通用查询对象
 */
export const fetchMenuList = () => {
  return axios.get<Response<SystemMenu[]>>(`system/menu/list`);
};

/**
 * @description: 查询菜单权限详细
 * @param {menuId} menuId 主键ID
 */
export const fetchMenuById = (menuId: number) => {
  return axios.get<Response<SystemMenu>>(`system/menu/${menuId}`);
};

/**
 * @description: 新增菜单权限
 * @param {SystemMenu} data 需要添加的数据
 */
export const createMenu = (data: SystemMenu) => {
  return axios.post<Response<SystemMenu>>(`system/menu`, data);
};

/**
 * @description: 更新菜单权限
 * @param {SystemMenu} data 更新数据
 */
export const updateMenu = (data: SystemMenu) => {
  return axios.put<Response<SystemMenu>>(`system/menu`, data);
};

/**
 * @description: 删除菜单权限
 * @param {menuIds} menuIds 传入ID数组,可以删除多个
 */
export const deleteMenu = (menuIds: number[]) => {
  return axios.delete<Response<SystemMenu>>(`system/menu/${menuIds.join(',')}`);
};

type Page = {
  pageSize: number;
  pageNum: number;
};

/**
 * @description: 导出菜单权限
 * @param {Page} page 根据页码导出表格
 */

export const exportMenu = async (page: Page) => {
  try {
    await exportFile({
      url: 'system/menu/export',
      data: page,
      fileName: '菜单权限.xls',
      method: 'POST',
    });
    message.success(`成功下载`);
  } catch (e) {
    message.success(`下载失败`);
  }
};

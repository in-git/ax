import {
  deleteMenu,
  exportMenu,
  fetchMenuById,
  fetchMenuList,
} from '@/api/modules/system/menu/menu';
import { convertMenuDataToTree } from '@/utils/common/tree';
import { response } from '@/utils/table/table';
import { menuForm, menuResetForm, menuShowForm } from './form';
import { menuKeys, menuQuery, menuTable } from './table';

export const menuList = async () => {
  try {
    menuTable.value.loading = true;
    const { data } = await fetchMenuList();
    if (data.data) {
      let treeData = convertMenuDataToTree(data.data);
      menuTable.value.data = treeData;
      menuQuery.value.total = treeData.length;
      menuTable.value.loading = false;
    }
  } catch (error) {
    menuTable.value.loading = false;
  }
};

export const menuEdit = async (id?: number) => {
  let targetId: number = id ? id : menuKeys.value[0];
  menuTable.value.loading = true;
  const { data } = await fetchMenuById(targetId);
  if (data.data) {
    menuForm.value = data.data;
    menuShowForm.value = true;
  }
  menuTable.value.loading = false;
};

export const menuCreate = async () => {
  menuResetForm();
  menuShowForm.value = true;
};

export const menuDelete = async (id?: number) => {
  let ids = id ? [id] : menuKeys.value;
  await response(deleteMenu, ids);
  await menuList();
  menuKeys.value = [];
};

// 导出EXCEL文件
export const menuExport = () => {
  return exportMenu({
    pageNum: menuQuery.value.pageNum,
    pageSize: menuQuery.value.pageSize,
  });
};

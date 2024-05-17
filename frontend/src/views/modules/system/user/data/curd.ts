import {
  deleteUser,
  deptTree,
  exportUser,
  fetchUserById,
  fetchUserList,
} from '@/api/modules/system/user/user';
import { response } from '@/utils/table/table';
import { userForm, userResetForm, userShowForm, userWithAuthForm } from './form';
import { deptTreeData, userKeys, userQuery, userTable } from './table';

export const userList = async () => {
  try {
    userTable.value.loading = true;
    const { data } = await fetchUserList(userQuery.value);
    userTable.value.data = data.rows;
    userQuery.value.total = data.total;
    userTable.value.loading = false;
  } catch (error) {
    userTable.value.loading = false;
  }
};

export const userEdit = async (id?: number) => {
  let targetId: number = id ? id : userKeys.value[0];
  userTable.value.loading = true;
  const { data } = await fetchUserById(targetId || '');

  userWithAuthForm.value = data;
  if (data.data) {
    userForm.value = data.data;
  }

  userShowForm.value = true;
  userForm.value.roleIds = data.roleIds;
  userForm.value.postIds = data.postIds;
  userTable.value.loading = false;
};

export const userCreate = async () => {
  userResetForm();
  await userEdit();
  userShowForm.value = true;
};

export const userDelete = async (id?: number) => {
  let ids = id ? [id] : userKeys.value;
  await response(deleteUser, ids);
  await userList();
  userKeys.value = [];
};

// 导出EXCEL文件
export const userExport = () => {
  return exportUser({
    pageNum: userQuery.value.pageNum,
    pageSize: userQuery.value.pageSize,
  });
};

/**
 * @description: 加载部门
 */
export const loadDeptTree = async () => {
  const { data } = await deptTree();
  if (data.data) {
    deptTreeData.value = data.data;
  }
};

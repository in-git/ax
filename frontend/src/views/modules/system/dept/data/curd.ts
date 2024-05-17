import { deleteDept, fetchDeptById, fetchDeptList } from '@/api/modules/system/dept/dept';
import type { SystemDept } from '@/api/modules/system/dept/types';
import { response } from '@/utils/table/table';
import { deptForm, deptResetForm, deptShowForm } from './form';
import { deptKeys, deptQuery, deptTable } from './table';

function convertMenuDataToTree(data: SystemDept[]): SystemDept[] {
  const map: { [key: number]: SystemDept } = {};
  const tree: SystemDept[] = [];
  data.forEach(item => {
    map[item.deptId] = { ...item, children: [] };
  });
  data.forEach(item => {
    if (item.parentId !== 0) {
      map[item.parentId!].children!.push(map[item.deptId]);
    } else {
      tree.push(map[item.deptId]);
    }
  });
  return tree;
}
export const deptList = async () => {
  deptTable.value.loading = true;
  const { data } = await fetchDeptList(deptQuery.value);
  if (data.data) {
    deptTable.value.data = convertMenuDataToTree(data.data);
    deptQuery.value.total = data.data?.length;
  }
  deptTable.value.loading = false;
};

export const deptEdit = async (id?: number) => {
  let targetId: number = id ? id : deptKeys.value[0];
  deptTable.value.loading = true;
  const { data } = await fetchDeptById(targetId);
  if (data.data) {
    deptForm.value = data.data;
    deptShowForm.value = true;
  }
  deptTable.value.loading = false;
};

export const deptCreate = async () => {
  deptResetForm();
  deptShowForm.value = true;
};

export const deptDelete = async (id?: number) => {
  let ids = id ? [id] : deptKeys.value;
  await response(deleteDept, ids);
  await deptList();
  deptKeys.value = [];
};
export const createSubDept = (parentId: number) => {
  deptCreate();
  deptForm.value.parentId = parentId;
};

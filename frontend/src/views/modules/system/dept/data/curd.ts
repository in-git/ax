import { deleteDept, fetchDeptList } from '@/api/modules/system/dept/dept';
import { response } from '@/utils/table/table';
import { deptResetForm, showDeptForm } from './form';
import { deptKeys, deptQuery, deptTable } from './table';

function convertToTree(data: SystemDept[]): SystemDept[] {
  const map: { [key: number]: SystemDept } = {};
  const tree: SystemDept[] = [];
  data.forEach(item => {
    map[item.deptId] = { ...item, children: [] };
  });
  data.forEach(item => {
    if (item.parentId !== 0) {
      map[item.parentId!].children.push(map[item.deptId]);
    } else {
      tree.push(map[item.deptId]);
    }
  });
  return tree;
}
export const deptList = async () => {
  deptTable.value.loading = true;
  /* GET LIST */
  const { data } = await fetchDeptList(deptQuery.value);
  if (data.data) {
    deptTable.value.data = convertToTree(data.data);
    deptQuery.value.total = data.data.length;
    deptTable.value.loading = false;
  }
};

export const deptEdit = async (id?: number) => {
  let targetId: number = id ? id : deptKeys.value[0];
  showDeptForm.value = true;
};
export const deptCreate = async () => {
  deptResetForm();
  showDeptForm.value = true;
};
export const deptDelete = async (id?: number) => {
  let targetId = id ? [id] : deptKeys.value[0];
  await response(deleteDept, targetId);
  deptList();
  /* Delete ids */
};

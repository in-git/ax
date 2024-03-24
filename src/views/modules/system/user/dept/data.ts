import type { UserDept } from '@/api/modules/system/user/types';
import { deptTree } from '@/api/modules/system/user/user';

export const deptTreeData = ref<UserDept[]>([]);
export const loadDeptTree = async () => {
  const { data } = await deptTree();
  if (data.data) {
    deptTreeData.value = data.data;
  }
};

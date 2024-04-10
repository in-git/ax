import { getDeptTree } from '../card/curd';
import { currentRole } from '../card/data';

export const resourceModal = ref(false);

export const allocatingResource = async () => {
  if (currentRole.value) {
    await getDeptTree(currentRole.value.roleId);
    resourceModal.value = true;
  }
};
export const scopedOptions = [
  {
    value: '1',
    label: '全部数据权限',
  },
  {
    value: '2',
    label: '自定数据权限',
  },
  {
    value: '3',
    label: '本部门数据权限',
  },
  {
    value: '4',
    label: '本部门及以下数据权限',
  },
  {
    value: '5',
    label: '仅本人数据权限',
  },
];

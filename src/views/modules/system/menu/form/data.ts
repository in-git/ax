import type { SystemMenu } from '@/api/modules/system/menu/types';

let object: SystemMenu = {
  createTime: '',
  menuId: 0,
  menuName: '',
  parentId: 0,
  orderNum: 0,
  path: '',
  query: '',
  isFrame: '1',
  isCache: '1',
  menuType: 'C',
  visible: '0',
  status: '0',
  perms: '',
  icon: '',
  children: [],
};
export const menuForm = ref<SystemMenu>({
  ...object,
});

export const showMenuForm = ref(false);
export const resetMenuForm = () => {
  menuForm.value = {
    ...object,
  };
  console.log(menuForm.value);
};

import type { SystemMenu } from '@/api/modules/system/menu/types';

export const method = () => {};
export const createMenuForm = ref(false);
export const shortcutForm = ref<SystemMenu>({
  createTime: '',
  menuId: 0,
  menuName: '',
  parentId: 0,
  orderNum: 0,
  path: '',
  query: '',
  isFrame: '1',
  isCache: '0',
  menuType: 'M',
  visible: '',
  status: '',
  perms: '',
  icon: '',
});

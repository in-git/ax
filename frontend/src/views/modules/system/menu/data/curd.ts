import { deleteMenu, getMenu, menuList } from '@/api/modules/system/menu/menu';
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { convertToTree } from '@/utils/common/tree';
import { message, Modal } from 'ant-design-vue';
import { menuKeys, menuTableConfig } from './data';
import { menuForm, resetMenuForm, showMenuForm } from './form';

export const editMenu = async (item?: SystemMenu) => {
  let menuId = 0;
  if (item) {
    menuId = item.menuId;
    menuForm.value = item;
  } else if (menuKeys.value.length === 1) {
    menuId = menuKeys.value[0];
  }

  const { data } = await getMenu(menuId);
  if (data.data) {
    menuForm.value = data.data;
  }
  showMenuForm.value = !showMenuForm.value;
};

export const createMenuData = () => {
  resetMenuForm();
  showMenuForm.value = !showMenuForm.value;
};

export const delMenu = (id?: string) => {
  Modal.confirm({
    title: 'Operational qualification',
    content: 'This may have an impact on the system',
    centered: true,
    async onOk() {
      let targetIds: string = '';
      if (id) {
        targetIds = id;
      } else {
        targetIds = `${menuKeys.value[0]}`;
      }
      try {
        const { data } = await deleteMenu(targetIds);
        message.success(data.msg);
        loadMenuData();
      } catch (error) {}
    },
  });
};
export const loadMenuData = async () => {
  menuTableConfig.value.loading = true;
  const { data } = await menuList();
  if (data.data) {
    menuTableConfig.value.data = convertToTree(data.data);
  }
  menuTableConfig.value.loading = false;
};

import { deleteMenu, getMenu } from '@/api/modules/system/menu/menu';
import { message, Modal } from 'ant-design-vue';
import { menuForm, resetMenuForm, showMenuForm } from '../form/data';
import { loadMenuData, menuConfig } from './data';

export const showMenuFormForm = async (id?: string) => {
  let menuId = '';
  if (id) {
    menuId = id;
  } else if (menuConfig.value.selectedKeys.length === 1) {
    menuId = `${menuConfig.value.selectedKeys[0]}`;
  }

  const { data } = await getMenu(`${menuId}`);
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
        targetIds = `${menuConfig.value.selectedKeys[0]}`;
      }
      try {
        const { data } = await deleteMenu(targetIds);
        message.success(data.msg);
        loadMenuData();
      } catch (error) {}
    },
  });
};

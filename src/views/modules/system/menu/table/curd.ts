import { deleteMenu, getMenu } from '@/api/modules/system/menu/menu';
import { message, Modal } from 'ant-design-vue';
import { editMenu, menuForm, resetMenuForm } from '../form/data';
import { loadMenuData, menuConfig } from './data';

export const editMenuForm = async (id?: string) => {
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
  editMenu.value = !editMenu.value;
};

export const createMenuData = () => {
  resetMenuForm();
  editMenu.value = !editMenu.value;
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
        console.log(targetIds, id);

        const { data } = await deleteMenu(targetIds);
        message.success(data.msg);
        loadMenuData();
      } catch (error) {}
    },
  });
};

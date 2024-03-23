import { getMenu } from '@/api/modules/system/menu/menu';
import { editMenu, menuForm, resetMenuForm } from '../form/data';
import { menuConfig } from './data';

export const editMenuForm = async () => {
  editMenu.value = true;
  if (menuConfig.value.selectedKeys.length === 1) {
    const id = menuConfig.value.selectedKeys[0];
    const { data } = await getMenu(`${id}`);
    if (data.data) {
      menuForm.value = data.data;
    }
  } else {
    resetMenuForm();
  }
};

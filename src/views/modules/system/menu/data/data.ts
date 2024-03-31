import type { IQuery } from '@/api/config/types';
import { menuList } from '@/api/modules/system/menu/menu';
import { convertToTree } from '@/utils/common/tree';

export const menuData = ref();

interface MenuQuery {
  menuName: string;
}

interface MenuConf {
  loading: boolean;
  query: IQuery<MenuQuery>;
}
export const menuTableConfig = ref({});

export const menuKeys = ref<number[]>([]);
export const listMenu = ref();
export const menuQuery = ref<MenuConf>({
  loading: false,
  query: {
    pageNum: 1,
    pageSize: 10,
    menuName: '',
    status: '',
    total: 0,
  },
});

export const loadMenuData = async () => {
  menuQuery.value.loading = true;
  const { data } = await menuList();
  if (data.data) {
    listMenu.value = convertToTree(data.data);
  }
  menuQuery.value.loading = false;
};

import type { IQuery } from '@/api/config/types';
import { menuList } from '@/api/modules/system/menu/menu';
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { convertToTree } from '@/utils/common/tree';
import type { Key } from 'ant-design-vue/es/_util/type';

export const menuData = ref();

interface MenuQuery {
  menuName: string;
}

interface MenuConf {
  loading: boolean;
  data: SystemMenu[];
  selectedKeys: Key[];
  query: IQuery<MenuQuery>;
}

export const menuQuery = ref<MenuConf>({
  loading: false,
  data: [],
  query: {
    pageNum: 1,
    pageSize: 10,
    menuName: '',
    status: '',
    total: 0,
  },
  selectedKeys: [],
});

export const loadMenuData = async () => {
  menuQuery.value.loading = true;
  const { data } = await menuList(menuQuery.value.query);
  if (data.data) {
    menuQuery.value.data = convertToTree(data.data);
  }
  menuQuery.value.loading = false;
};

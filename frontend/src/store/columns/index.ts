import { defineStore } from 'pinia';

interface Columns {
  show?: boolean;
  title?: string;
  dataIndex: string;
}
interface StoreColumns {
  columns: Columns;
  moduleName: string;
}
/* 系统表格表头,ModuleName必须唯一，否则会冲突 */
const useColumnsStore = defineStore('columns', {
  state: (): StoreColumns[] => [],
  persist: true,
});

export default useColumnsStore;

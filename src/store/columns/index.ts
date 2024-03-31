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

const useColumnsStore = defineStore('columns', {
  state: (): StoreColumns[] => [],
  persist: true,
});

export default useColumnsStore;

import { defineStore } from 'pinia';

interface FolderStore {
  size: number;
}
const useFolderStore = defineStore('folder', {
  state: (): FolderStore => ({
    size: 74,
  }),
  persist: true,
});

export default useFolderStore;

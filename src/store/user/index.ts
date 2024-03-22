import { defineStore } from 'pinia';
import type { UserState } from './types';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    token: '',
  }),
  persist: true,
});

export default useUserStore;

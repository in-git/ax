import { defineStore } from 'pinia';
import type { UserState } from './types';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: '',
    token: '',
    history: [],
    userInfo: undefined,
  }),
  persist: true,
});

export default useUserStore;

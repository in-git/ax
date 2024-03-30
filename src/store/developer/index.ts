import { defineStore } from 'pinia';
import type { Developer } from './types';

const useDeveloperStore = defineStore('developer', {
  state: (): Developer => ({
    baseURL: 'http://150.158.14.110:8081/',
    urlSelection: [],
    timeout: 8000,
  }),
  persist: true,
});

export default useDeveloperStore;

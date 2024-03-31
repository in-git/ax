import { defineStore } from 'pinia';
import { baseUrlOptions } from './data';
import type { Developer } from './types';

const useDeveloperStore = defineStore('developer', {
  state: (): Developer => ({
    baseURL: 'http://150.158.14.110:8081/',
    urlSelection: baseUrlOptions,
    timeout: 8000,
  }),
  persist: true,
});

export default useDeveloperStore;

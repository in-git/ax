import { defineStore } from 'pinia';
import { baseUrlOptions } from './options';
import type { SystemStore } from './types';
/* 从vite环境变量中读取 `默认后端地址` */
const baseURL = import.meta.env.VITE_BASEURL;
const useSystemStore = defineStore('system', {
  state: (): SystemStore => ({
    readMessages: [],
    developer: {
      baseURL,
      urlSelection: baseUrlOptions,
      timeout: 8,
      resourceHost: 'https://in-git.github.io/ax-resource/nodejs/images',
    },
  }),
  persist: true,
});

export default useSystemStore;

import { defineStore } from 'pinia';
import type { PageSettings } from './types';
/* 从vite环境变量中读取 `默认后端地址` */
const baseURL = import.meta.env.VITE_BASEURL || '';

const baseUrlOptions = [
  {
    label: '本地',
    value: 'http://localhost:8080/',
    id: 'test',
  },
  {
    label: '测试',
    value: 'http://150.158.14.110:8081/',
    id: 'test',
  },
  {
    label: '若依官网',
    value: 'http://vue.ruoyi.vip/prod-api/',
    id: 'ruo-yi',
  },
];
const usePageStore = defineStore('page', {
  state: (): PageSettings => ({
    theme: {
      theme: '#64cbff',
      size: 'small',
      direction: 'ltr',
      wave: true,
      virtual: true,
      autoInsertSpaceInButton: true,
      fontSize: 14,
      borderRadius: 4,
    },
    locale: 'en',
    developer: {
      baseURL,
      urlSelection: baseUrlOptions,
      timeout: 8000,
    },
    config: {
      locale: '',
    },
    desktop: {
      background: {
        type: 'image',
        src: '',
        brightness: 100,
        blur: 0,
        color: 'white',
      },
      topNavigationBar: {
        blur: 1,
        opacity: 0.5,
      },
    },
  }),
  persist: true,
});

export default usePageStore;

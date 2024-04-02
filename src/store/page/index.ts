import { defineStore } from 'pinia';
import type { Developer, Theme } from './types';

interface PageSettings {
  developer: Developer;
  theme: Theme;
  config: {
    locale: string;
  };
}
const baseUrlOptions = [
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
      locale: 'en',
      size: 'small',
      direction: 'ltr',
      wave: true,
      virtual: true,
      autoInsertSpaceInButton: true,
    },
    developer: {
      baseURL: 'http://150.158.14.110:8081/',
      urlSelection: baseUrlOptions,
      timeout: 8000,
    },
    config: {
      locale: '',
    },
  }),
  persist: true,
});

export default usePageStore;

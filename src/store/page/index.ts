import { defineStore } from 'pinia';
interface PageSettings {
  theme: string;
  locale: string;
  direction: 'ltr' | 'rtl';
  wave: boolean;
  virtual: boolean;
  size?: 'small' | 'middle' | 'large' | undefined;
  autoInsertSpaceInButton: boolean;
  baseURL: string;
}
const usePageStore = defineStore('user', {
  state: (): PageSettings => ({
    theme: '',
    locale: 'en',
    size: 'small',
    direction: 'ltr',
    wave: true,
    virtual: true,
    autoInsertSpaceInButton: true,
    baseURL: 'http://150.158.14.110:16060/api/v1/',
  }),
  persist: true,
});

export default usePageStore;

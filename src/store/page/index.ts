import { defineStore } from 'pinia';
interface PageSettings {
  theme: string;
  locale: string;
  direction: 'ltr' | 'rtl';
  wave: boolean;
  virtual: boolean;
  size?: 'small' | 'middle' | 'large' | undefined;
  autoInsertSpaceInButton: boolean;
}
const usePageStore = defineStore('user', {
  state: (): PageSettings => ({
    theme: '',
    locale: '',
    size: 'small',
    direction: 'ltr',
    wave: true,
    virtual: true,
    autoInsertSpaceInButton: true,
  }),
  persist: true,
});

export default usePageStore;

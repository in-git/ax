import { defineStore } from 'pinia';
import type { PageSettings } from './types';

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
    desktop: {
      background: {
        type: 'image',
        src: '',
        brightness: 0,
        blur: 0,
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

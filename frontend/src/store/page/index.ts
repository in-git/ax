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
      algorithm: 'default',
    },
    desktop: {
      background: {
        type: 'image',
        brightness: 0,
        blur: 0,
        grayscale: 0,
      },
      topNavigationBar: {
        blur: 1,
        opacity: 0.5,
        borderOpacity: 1,
      },
    },
    window: {},
  }),
  persist: true,
});

export default usePageStore;

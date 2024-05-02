/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}
declare module 'draggable-resizable-vue3';
declare module 'splitpanes';
declare module 'vue3-video-play';
declare module '@he-tree/vue';
declare module 'vue-responsive-video-background-player';

export type BrowserTabItem = {
  title: string;
  id: string;
  url: string;
  history: BrowserTabItem[];
  /* 前进后退的指针 */
  pointer: number;
};

export interface Theme {
  theme: string;
  fontSize: number;
  borderRadius: number;
  direction: 'ltr' | 'rtl';
  wave: boolean;
  virtual: boolean;
  size?: 'small' | 'middle' | 'large' | undefined;
  algorithm: 'compact' | 'default' | 'dark';
  autoInsertSpaceInButton: boolean;
}

export type BackgroundType = 'image' | 'video' | 'base64';

export interface DesktopBackground {
  type: BackgroundType;
  brightness: number;
  blur: number;
  grayscale: number;
}

export interface PageSettings {
  theme: Theme;
  desktop: {
    background: DesktopBackground;
    topNavigationBar: {
      blur: number;
      opacity: number;
      borderOpacity: number;
    };
  };
  /* 在用户拖拽后，记录Window 的宽/高度 */
  window: {
    /* 动态模块名 */
    [key: string]: {
      width: number;
      height: number;
      x?: number;
      y?: number;
    };
  };
}

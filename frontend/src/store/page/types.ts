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
export interface DesktopBackground {
  type: 'image' | 'video';
  src: string;
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
}

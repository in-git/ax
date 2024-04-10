export interface URLSelection {
  label: string;
  value: string;
  id: string;
}
export interface Developer {
  baseURL: string;
  timeout: number;
  urlSelection: URLSelection[];
}
export interface Developer {
  baseURL: string;
  timeout: number;
  urlSelection: URLSelection[];
}
export interface Theme {
  theme: string;
  fontSize: number;
  borderRadius: number;
  direction: 'ltr' | 'rtl';
  wave: boolean;
  virtual: boolean;
  size?: 'small' | 'middle' | 'large' | undefined;
  autoInsertSpaceInButton: boolean;
}
export interface DesktopBackground {
  type: 'image' | 'video';
  src: string;
  brightness: number;
  blur: number;
}
export interface PageSettings {
  developer: Developer;
  theme: Theme;
  desktop: {
    background: DesktopBackground;
    topNavigationBar: {
      blur: number;
      opacity: number;
    };
  };
}

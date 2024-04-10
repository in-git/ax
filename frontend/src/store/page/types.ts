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
  color: 'white' | 'black';
}
export interface PageSettings {
  developer: Developer;
  theme: Theme;
  config: {
    locale: string;
  };
  locale: string;
  desktop: {
    background: DesktopBackground;
    topNavigationBar: {
      blur: number;
      opacity: number;
    };
  };
}

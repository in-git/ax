export interface DesktopNotice {
  content: string;
  title: string;
  type: 'net' | 'system' | 'temp';
  id: number | string;
  time: string;
  color: 'orange' | 'green' | 'gray' | 'red';
}

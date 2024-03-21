export interface MenuItem {
  path: string;
  meta: Meta;
  sort?: number;
  redirect?: string;
  children?: MenuItem[];
  props?: boolean;
}

interface Meta {
  icon: string;
  title: string;
}

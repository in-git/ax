const images = import.meta.glob('./assets/system/*.*');
let modules = import.meta.glob('./views/modules/**/index.vue');

interface DynamicComponents {
  component: any;
  path: string;
}
export const systemImages = ref<string[]>([]);

export const systemComponents = ref<DynamicComponents[]>([]);

export const loadSystemIcons = () => {
  Object.keys(images).forEach(path => {
    systemImages.value.push(path);
  });
};

export const loadSystemComponents = () => {
  for (const path in modules) {
    const result = path.match(/.*\/(.+).vue$/);
    if (result) {
      const component: any = modules[path];
      systemComponents.value.push({
        component: markRaw(defineAsyncComponent(component)),
        path,
      });
    }
  }
};

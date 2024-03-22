const images = import.meta.glob('./assets/system/*.*');
export const systemImages = ref<string[]>([]);

export const loadSystemIcons = () => {
  Object.keys(images).forEach(path => {
    systemImages.value.push(path);
  });
};

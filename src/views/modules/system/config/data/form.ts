export const showConfigForm = ref(false);

const form: any = {};

export const configForm = ref<any>({
  ...form,
});

export const resetConfigForm = () => {
  configForm.value = {
    ...form,
  };
};

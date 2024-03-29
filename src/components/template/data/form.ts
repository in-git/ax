export const __ShowForm = ref(false);

const form: any = {};

export const __Form = ref<any>({
  ...form,
});

export const __resetForm = () => {
  __Form.value = {
    ...form,
  };
};

export const __ShowForm = ref(false);

const form: any = {};

export const __Form = ref<any>({
  ...form,
});

export const reset__Form = () => {
  __Form.value = {
    ...form,
  };
};

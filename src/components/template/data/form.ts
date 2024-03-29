export const __showForm = ref(false);

const form: any = {};

export const __form = ref<any>({
  ...form,
});

export const reset__form = () => {
  __form.value = {
    ...form,
  };
};

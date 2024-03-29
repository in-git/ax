export const dictShowForm = ref(false);

const form: any = {};

export const dictForm = ref<any>({
  ...form,
});

export const dictResetForm = () => {
  dictForm.value = {
    ...form,
  };
};

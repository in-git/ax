export const dicDataShowForm = ref(false);

const form: any = {};

export const dicDataForm = ref<any>({
  ...form,
});

export const dicDataResetForm = () => {
  dicDataForm.value = {
    ...form,
  };
};

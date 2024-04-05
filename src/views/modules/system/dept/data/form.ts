export const deptShowForm = ref(false);

const form: any = {};

export const deptForm = ref<any>({
  ...form,
});

export const deptResetForm = () => {
  deptForm.value = {
    ...form,
  };
};

export const onlineShowForm = ref(false);

const form: any = {};

export const onlineForm = ref<any>({
  ...form,
});

export const resetOnlineForm = () => {
  onlineForm.value = {
    ...form,
  };
};

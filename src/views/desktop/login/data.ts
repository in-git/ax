export const langOptions = [
  { label: 'English', value: 'en' },
  { label: 'Chinese', value: 'zh' },
];
export const loginForm = ref({
  name: 'admin',
  password: 'admin123',
  uuid: '',
  code: '',
});

export const loginLoading = ref<boolean>(false);

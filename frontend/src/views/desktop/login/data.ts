import { captcha, login, register } from '@/api/modules/system/user/user';
import useUserStore from '@/store/user';
import { message } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { nanoid } from 'nanoid';
import { getProfile } from '../toolbar/profile/data';

export const captchaImage = ref();
type Mode = 'login' | 'register';
export const loginLoading = ref<boolean>(false);
export const loginMode = ref<Mode>('login');

let formObject = {
  username: '',
  password: '',
  uuid: '',
  code: '',
};

export const loginForm = ref({
  ...formObject,
});

export const getCaptcha = async () => {
  const { data } = await captcha();
  captchaImage.value = `data:image/gif;base64,${data.img}`;
  loginForm.value.uuid = data.uuid;
};

export const changeMode = (mode: Mode) => {
  if (mode === 'register') {
    loginForm.value = {
      ...formObject,
    };
  }

  loginMode.value = mode;
};
const onError = () => {
  loginLoading.value = false;
  loginForm.value.code = '';
  getCaptcha();
};

/* 登录 */
export const enter = async () => {
  try {
    loginLoading.value = true;
    const { data } = await login({
      username: loginForm.value.username,
      password: loginForm.value.password,
      code: loginForm.value.code,
      uuid: loginForm.value.uuid,
    });
    const store = useUserStore();

    loginLoading.value = false;
    message.success('操作成功');
    const index = store.$state.history.findIndex(e => {
      return e.username === loginForm.value.username && loginForm.value.password === e.password;
    });

    if (index === -1 || store.$state.history.length === 0) {
      store.$state.history.push({
        username: loginForm.value.username,
        password: loginForm.value.password,
        id: nanoid(),
      });
    }
    await getProfile();
    changeMode('login');
    store.$state.token = data.token;
  } catch (error) {
    onError();
  }
};

export const finish = async () => {
  /* 创建历史记录 */
  const { data } = await register({
    username: loginForm.value.username,
    password: loginForm.value.password,
    code: loginForm.value.code,
    uuid: loginForm.value.uuid,
  });
  message.success(data.msg);
  changeMode('login');
};

export const loginRules: Record<string, Rule[]> = {
  password: [
    {
      required: true,
      min: 6,
      max: 18,
    },
  ],
  username: [
    {
      required: true,
      min: 5,
    },
  ],
};

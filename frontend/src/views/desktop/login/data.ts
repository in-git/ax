import { captcha, login, register } from '@/api/modules/system/user/user';
import { closeWindow } from '@/global/window/window';
import useUserStore from '@/store/user';
import { message } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { nanoid } from 'nanoid';
import { getUserRouters } from '../apps/data';
import { getProfile } from '../toolbar/profile/data';
import type { Mode } from './types';

let formObject = {
  username: 'observer',
  password: 'axobserver',
  uuid: '',
  code: '',
};
export const serverType = ref<'ax' | 'ry'>('ax');
export const requiredCaptcha = ref<boolean>(true);
export const captchaImage = ref();

export const loginLoading = ref<boolean>(false);
export const loginMode = ref<Mode>('quick-login');

export const resetForm = () => {};

export const loginForm = ref({
  ...formObject,
});

export const getCaptcha = async () => {
  const { data } = await captcha();
  if (!data.captchaEnabled) {
    requiredCaptcha.value = false;
    return;
  }
  captchaImage.value = `data:image/gif;base64,${data.img}`;
  loginForm.value.uuid = data.uuid;
};

/* 修改登录注册模式 */
export const changeMode = (mode: Mode) => {
  if (mode === 'register') {
    loginForm.value = {
      username: '',
      password: '',
      uuid: '',
      code: '',
    };
  } else {
  }

  loginMode.value = mode;
};
/* 出错后重新拉取二维码 */
const onError = () => {
  loginLoading.value = false;
  loginForm.value.code = '';
  getCaptcha();
};

/* 登录,登录成功后，会记住账号密码 */
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
    message.success('登录成功');
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
    store.$state.token = data.token;
    await getProfile();
    changeMode('login');
    closeWindow('login');
    getUserRouters();
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
      max: 18,
    },
  ],
  username: [
    {
      required: true,
    },
  ],
};

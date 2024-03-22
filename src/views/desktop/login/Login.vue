<template>
  <div class="login flex-1">
    <div class="login-container">
      <Welcome />
      <div class="form">
        <div class="form-container p-32">
          <a-space direction="vertical" class="w-100">
            <h1 class="mb-24">Login in</h1>
            <a-form layout="vertical" size="large" @finish="finish" :model="loginForm">
              <a-form-item label="Username" required name="name">
                <a-input
                  v-model:value="loginForm.name"
                  allow-clear
                  placeholder="Please enter username"
                ></a-input>
              </a-form-item>

              <a-form-item label="Password" required name="password">
                <a-input-password
                  allow-clear
                  v-model:value="loginForm.password"
                  placeholder="Please enter password"
                ></a-input-password>
              </a-form-item>

              <a-form-item name="lang">
                <a-radio-group
                  v-model:value="pageStore.$state.locale"
                  :options="langOptions"
                ></a-radio-group>
              </a-form-item>

              <a-form-item label="Captcha" name="code" required>
                <div class="flex gc-12">
                  <a-input placeholder="Please enter captcha" v-model:value="loginForm.code" />
                  <a-image
                    @click="getCaptcha"
                    :preview="false"
                    loading="lazy"
                    class="cursor-pointer"
                    :src="captchaImage"
                    width="100"
                  />
                </div>
              </a-form-item>

              <a-form-item>
                <a-flex :align="'center'" justify="space-between">
                  <a-checkbox>user agreement</a-checkbox>
                  <a-button type="link" class="px-0">forget password?</a-button>
                </a-flex>
              </a-form-item>
              <a-button type="primary" html-type="submit" :loading="loginLoading" block>
                Login
              </a-button>
            </a-form>
            <a-divider>The others</a-divider>
            <a-flex justify="center" gap="12">
              <div class="system-icon">
                <WechatOutlined />
              </div>
              <div class="system-icon">
                <QqOutlined />
              </div>
              <div class="system-icon">
                <GoogleOutlined />
              </div>
              <div class="system-icon">
                <GithubFilled />
              </div>
            </a-flex>
          </a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { captcha, login } from '@/api/modules/user/user';
import usePageStore from '@/store/page';
import useUserStore from '@/store/user';
import { message } from 'ant-design-vue';
import Welcome from './Welcome.vue';
import { langOptions, loginForm, loginLoading } from './data';
const pageStore = usePageStore();
const captchaImage = ref();

const getCaptcha = async () => {
  const { data } = await captcha();
  captchaImage.value = `data:image/gif;base64,${data.img}`;
  loginForm.value.uuid = data.uuid;
};

onMounted(() => {
  getCaptcha();
});

const finish = async () => {
  loginLoading.value = true;
  try {
    const { data } = await login({
      username: loginForm.value.name,
      password: loginForm.value.password,
      code: loginForm.value.code,
      uuid: loginForm.value.uuid,
    });
    loginLoading.value = false;
    message.success('Success');

    const store = useUserStore();

    store.$state.token = data.token;
  } catch (error) {
    loginLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: #f8f8f8;
  .login-container {
    display: flex;
    height: 100%;

    .form {
      padding: 24px;
      min-width: 400px;
      width: 30%;
      .form-container {
        background: white;
        border: 1px solid #ddd;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

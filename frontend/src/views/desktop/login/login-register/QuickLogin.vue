<template>
  <div>
    <a-card class="form card__content" :bordered="false">
      <a-flex :gap="24">
        <div
          class="mode-item"
          @click="changeMode(item.value)"
          v-for="item in modeList"
          :class="{ 'item-active': item.value === loginMode }"
        >
          {{ item.label }}
        </div>
      </a-flex>

      <div class="mt-8">
        <a-card title="快速登陆">
          <ul>
            <li v-for="item in accountList" :key="item.account" @click="selectItem(item)">
              <a-avatar :size="48" :src="getStaticImage('image-icon/user.png')"></a-avatar>
              <div>
                {{ item.nickname }}
              </div>
              <div class="system__subtitle">
                {{ item.desc }}
              </div>
            </li>
          </ul>
        </a-card>
      </div>
    </a-card>

    <a-modal
      style="width: 70%"
      v-model:open="codeModal"
      title="快捷登录"
      :footer="false"
      get-container=".card__content"
    >
      <a-form :model="loginForm" @finish="enter" layout="vertical">
        <a-form-item>
          <a-image
            @click="getCaptcha"
            :preview="false"
            loading="lazy"
            class="cursor-pointer"
            :src="captchaImage"
            width="80px"
          />
        </a-form-item>
        <a-form-item label="验证码" name="code" required>
          <a-input placeholder="请输入验证码" v-model:value="loginForm.code"></a-input>
        </a-form-item>

        <a-button htmlType="submit" :loading="loginLoading">登录</a-button>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import {
  captchaImage,
  changeMode,
  enter,
  getCaptcha,
  loginForm,
  loginLoading,
  loginMode,
} from '../data';
import { modeList } from '../options';
const codeModal = ref();

const selectItem = (item: Account) => {
  loginForm.value.password = item.password;
  loginForm.value.username = item.account;
  codeModal.value = true;
};
interface Account {
  account: string;
  password: string;
  nickname: string;
  desc: string;
}
const accountList: Account[] = [
  {
    account: 'observer',
    password: 'axobserver',
    nickname: '观察员',
    desc: '能看到整个系统的功能',
  },
  {
    account: 'test02',
    password: '123456',
    nickname: '测试账号',
    desc: '可以创建一些数据',
  },
];

onMounted(() => {
  getCaptcha();
});
</script>

<style lang="scss" scoped>
:deep(.ant-card-body) {
  border-radius: 0 !important;
}
ul {
  display: flex;
  padding: 12px;
  gap: 12px;
  li {
    text-align: center;
    flex: 1;
    padding: 4px 14px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    cursor: pointer;
    &:hover {
      background-color: var(--color-primary-hover-bg);
    }
  }
}
@import './style';
</style>

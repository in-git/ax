<template>
  <div class="flex justify-center">
    <a-form
      class="w-70"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 17, offset: 1 }"
      @finish="submit"
      label-align="left"
      :model="form"
    >
      <a-form-item required name="ak" label="AK">
        <a-input allow-clear size="large" placeholder="请输入AK" v-model:value="form.ak"></a-input>
      </a-form-item>
      <a-form-item required name="sk" label="SK">
        <a-input allow-clear size="large" placeholder="请输入SK" v-model:value="form.sk"></a-input>
      </a-form-item>
      <a-form-item label="AccessToken">
        <a-input
          size="large"
          allow-clear
          v-model:value="AIStore.$state.qianFan.access_token"
          placeholder="前往百度千帆大模型获取token"
        >
          <template #suffix>
            <a-tooltip title="复制">
              <a-button type="ghost" @click="copyText(AIStore.$state.qianFan.access_token)">
                <CopyOutlined />
              </a-button>
            </a-tooltip>
          </template>
        </a-input>
        <div class="text-right">
          <a-button type="link">立即获取</a-button>
        </div>
      </a-form-item>

      <div class="flex flex-s">
        <div class="button-effect">
          <button class="learn-more" type="submit" :disabled="!form.ak || !form.sk">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text" v-if="!AIStore.$state.qianFan.access_token">立即获取</span>
            <span class="button-text" v-else>重新获取</span>
          </button>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { getQFToken } from '@/api/modules/tool/api/api';
import useAIStore from '@/store/AI/AI';
import { copyText } from '@/utils/common/utils';
import type { CopyOutlined } from '@ant-design/icons-vue';
import localforage from 'localforage';
interface Form {
  ak: string;
  sk: string;
}
const form = ref<Form>({
  ak: '',
  sk: '',
});
const AIStore = useAIStore();

onMounted(async () => {
  const tokenString: string = (await localforage.getItem('qf-api')) as string;
  const api: Form = JSON.parse(tokenString);
  form.value.ak = api.ak;
  form.value.sk = api.sk;
});

const submit = async () => {
  await localforage.setItem('qf-api', JSON.stringify(form.value));
  const { data } = await getQFToken(form.value.ak, form.value.sk);
  if (data.data) {
    AIStore.$state.qianFan.access_token = data.data.access_token;
  }
};
</script>

<style lang="scss" scoped>
$bg: #f3f8fa;
$white: #fff;
$black: #282936;

@mixin transition($property: all, $duration: 0.45s, $ease: cubic-bezier(0.65, 0, 0.076, 1)) {
  transition: $property $duration $ease;
}
.button-effect {
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    &.learn-more {
      width: 12rem;
      height: auto;
      .circle {
        @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: $black;
        border-radius: 1.625rem;
        .icon {
          @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          background: $white;
          &.arrow {
            @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
            left: 0.625rem;
            width: 1.125rem;
            height: 0.125rem;
            background: none;
            &::before {
              position: absolute;
              content: '';
              top: -0.25rem;
              right: 0.0625rem;
              width: 0.625rem;
              height: 0.625rem;
              border-top: 0.125rem solid #fff;
              border-right: 0.125rem solid #fff;
              transform: rotate(45deg);
            }
          }
        }
      }
      .button-text {
        @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 1.85rem;
        color: $black;
        font-weight: 700;
        line-height: 1.6;
        text-align: center;
        text-transform: uppercase;
      }
    }
    &:hover {
      .circle {
        width: 100%;
        .icon {
          &.arrow {
            background: $white;
            transform: translate(1rem, 0);
          }
        }
      }
      .button-text {
        color: $white;
      }
    }
  }
}
</style>

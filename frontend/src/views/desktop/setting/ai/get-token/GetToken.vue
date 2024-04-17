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
        <a-input allow-clear size="large" placeholder="请输入AK" v-model:value="form.ak">
          <template #suffix>
            <a-popover trigger="click">
              <a-tooltip title="从备忘录中读取">
                <a-button type="ghost">
                  <BookOutlined />
                </a-button>
              </a-tooltip>
              <template #content>
                <MemoVue v-model:value="form.ak"></MemoVue>
              </template>
            </a-popover>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item required name="sk" label="SK">
        <a-input allow-clear size="large" placeholder="请输入SK" v-model:value="form.sk">
          <template #suffix>
            <a-popover trigger="click">
              <a-tooltip title="从备忘录中读取">
                <a-button type="ghost">
                  <BookOutlined />
                </a-button>
              </a-tooltip>
              <template #content>
                <MemoVue v-model:value="form.sk"></MemoVue>
              </template>
            </a-popover>
          </template>
        </a-input>
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
import MemoVue from '@/views/selector/memo/Memo.vue';
import { BookOutlined, type CopyOutlined } from '@ant-design/icons-vue';
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
  if (!tokenString) return;
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
@import './style';
</style>

<template>
  <div class="qf-container flex flex-col">
    <div class="banner">
      <div class="banner-text flex flex-s flex-col">
        <h3 class="text-36 text-bold text-center">千帆大模型</h3>
        <div class="text-12 text-center my-24 w-40 text-eee">
          百度自研的旗舰级大规模⼤语⾔模型，覆盖海量中英文语料，具有强大的通用能力，可满足绝大部分对话问答、创作生成、插件应用场景要求
        </div>
        <a-button type="link" style="color: pink">立即获取</a-button>
      </div>
    </div>
    <div class="flex-1 qf-form flex flex-s">
      <a-form layout="vertical" @finish="submit" :model="form">
        <a-form-item required name="ak">
          <a-input size="large" placeholder="请输入AK" v-model:value="form.ak"></a-input>
        </a-form-item>
        <a-form-item required name="sk">
          <a-input size="large" placeholder="请输入SK" v-model:value="form.sk"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input size="large" placeholder="前往百度千帆大模型获取token" disabled>
            <template #suffix>
              <CopyOutlined />
            </template>
          </a-input>
        </a-form-item>

        <div class="flex flex-s">
          <div class="button-effect">
            <button class="learn-more" type="submit">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">立即开始</span>
            </button>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAccessToken } from '@/api/modules/external/qian-fan/qian-fan';
import useAIStore from '@/store/AI/AI';
import type { CopyOutlined } from '@ant-design/icons-vue';

const form = ref({
  ak: '',
  sk: '',
});
const AIStore = useAIStore();
onMounted(() => {
  form.value.ak = AIStore.$state.qianFan.ak;
  form.value.sk = AIStore.$state.qianFan.sk;
});

const submit = async () => {
  AIStore.$state.qianFan.ak = form.value.ak;
  AIStore.$state.qianFan.sk = form.value.sk;
  const { data } = await getAccessToken(form.value.ak, form.value.sk);
  console.log(data);
};
const urlOptions = [];
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

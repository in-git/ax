import useGptStore from '@/store/gpt/gpt';
import type { GptMessage } from '@/store/gpt/types';
import { message } from 'ant-design-vue';
import type { AxiosError } from 'axios';
import axios from 'axios';
import { conversation } from '../../sidebar/sidebar';

export const msg = ref<string>('');
export const dataLoading = ref();

interface GptParams {
  messages: GptMessage[];
  model: 'gpt-3.5-turbo';
  stream: boolean;
  temperature: number;
  top_p: number;
}

export const sendMsg = (data: GptParams) => {
  const gptStore = useGptStore();
  const baseUrl = gptStore.$state.config.baseUrl;
  const http = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${gptStore.$state.config.token}`,
    },
  });
  return http.post(`${baseUrl}`, data);
};
/* 发送消息 */
export const send = async (inputEl?: Ref<HTMLElement | undefined>) => {
  const event = window.event as MouseEvent;
  const gptStore = useGptStore();
  if (!msg.value) {
    return;
  }
  if (event.ctrlKey || event.altKey) {
    msg.value += '\n';
    return;
  } else {
    event.preventDefault();
  }
  dataLoading.value = true;
  let tempMsg = undefined;
  try {
    const newMsg: GptMessage = {
      role: 'user',
      content: msg.value,
    };
    conversation.value.messageList.push({
      ...newMsg,
    });

    if (gptStore.$state.config.memory) {
      tempMsg = conversation.value.messageList;
    } else {
      tempMsg = [newMsg];
    }

    const { data } = await sendMsg({
      messages: tempMsg,
      model: gptStore.$state.config.model,
      stream: false,
      temperature: gptStore.$state.config.temperature,
      top_p: 0.7,
    });
    msg.value = '';

    data.choices.forEach((e: any) => {
      conversation.value.messageList.push({
        role: e.message.role,
        content: e.message.content,
      });
    });

    nextTick(() => {
      if (!inputEl) return;
      inputEl.value?.focus();
    });
    dataLoading.value = false;
  } catch (error) {
    dataLoading.value = false;
    if (gptStore.$state.config.memory) {
      conversation.value.messageList.pop();
    }
    const err = error as AxiosError;
    const response = err.response as any;
    if (response?.data) {
      console.log(response.data.error);

      if (response.data.error.type === 'one_api_error') {
        message.warning('请填写秘钥');
        return;
      }
    }
    message.warn('Unknown error');
  }
};
interface Balance {
  total: number;
  balanceData: number;
}
export const getBalance = async (): Promise<Balance> => {
  const subscription = `https://openkey.cloud/v1/dashboard/billing/subscription`;
  const usage = `https://openkey.cloud/v1/dashboard/billing/usage`;
  const configStore = useGptStore();

  const data = {
    headers: {
      Authorization: `Bearer ${configStore.$state.config.token}`,
    },
    data: {
      api_key: configStore.$state.config.token,
    },
  };
  /* 获取总量 */
  const { data: subscriptionData } = await axios.get(`${subscription}`, data);
  /* 获取已使用了的 */
  const { data: usageData } = await axios.get(`${usage}`, data);
  return {
    total: usageData.total_usage,
    balanceData: subscriptionData.hard_limit_usd,
  };
};

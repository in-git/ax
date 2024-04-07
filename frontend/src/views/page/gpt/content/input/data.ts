import { sendMsg } from '@/api/modules/external/chatgpt/chatgpt';
import useGptStore from '@/store/gpt/gpt';
import type { GptMessage } from '@/store/gpt/types';
import { message } from 'ant-design-vue';
import type { AxiosError } from 'axios';
import { conversation } from '../../sidebar/sidebar';

export const msg = ref<string>('');
export const dataLoading = ref();

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
  let tempMsg: GptMessage[] = [];
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

    const { data } = await sendMsg(tempMsg);
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

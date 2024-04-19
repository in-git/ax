import { qfMsg } from '@/api/external/qian-fan/qian-fan';
import useAIStore from '@/store/AI/AI';
import type { AIMessage } from '@/store/AI/types';
import { message } from 'ant-design-vue';
import type { AxiosError } from 'axios';
import { conversation } from '../../sidebar/sidebar';

export const msg = ref<string>('');
export const dataLoading = ref();

/* 定时器 */
export const aiClearTimer = ref<NodeJS.Timeout>();
/* 发送消息 */
export const send = async (inputEl?: Ref<HTMLElement | undefined>) => {
  const event = window.event as MouseEvent;
  const AIStore = useAIStore();
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
  let tempMsg: AIMessage[] = [];
  try {
    const newMsg: AIMessage = {
      role: 'user',
      content: msg.value,
    };
    conversation.value.messageList.push({
      ...newMsg,
    });
    if (AIStore.$state.qianFan.memory) {
      tempMsg = conversation.value.messageList;
    } else {
      tempMsg = [newMsg];
    }

    const { data } = await qfMsg(tempMsg);

    msg.value = '';

    conversation.value.messageList.push({
      role: 'assistant',
      content: data.result,
    });
    nextTick(() => {
      if (!inputEl) return;
      inputEl.value?.focus();
    });
    dataLoading.value = false;
  } catch (error) {
    clearInterval(aiClearTimer.value);
    dataLoading.value = false;
    if (AIStore.$state.qianFan.memory) {
      conversation.value.messageList.pop();
    }
    const err = error as AxiosError;

    message.warn(err.message);
  }
};

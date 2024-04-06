import { copyText } from '@/utils/common/utils';
import type { GptMessage } from '@/views/page/gpt/store/types';
import { CopyOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { conversation } from '../../sidebar/sidebar';
import { msg, send } from '../input/data';
export const messageActions = [
  {
    tips: '复制',
    action(item: GptMessage) {
      copyText(item.content);
      message.success('Copied');
    },
    icon: markRaw(CopyOutlined),
    show: () => true,
  },
  {
    tips: '重新生成',
    action(item: GptMessage) {
      msg.value = item.content;
      send();
    },
    icon: markRaw(ReloadOutlined),
    show(item: GptMessage) {
      return item.role === 'user';
    },
  },

  {
    tips: '删除',
    action(_: GptMessage, index: number) {
      conversation.value.messageList = conversation.value.messageList.filter(
        (_: any, i: number) => {
          return i !== index;
        },
      );
    },
    icon: markRaw(DeleteOutlined),
    show: () => true,
  },
];

import type { AIMessage } from '@/store/AI/types';
import { copyText } from '@/utils/common/utils';
import { CopyOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { conversation } from '../../sidebar/sidebar';
import { msg, send } from '../input/data';
export const messageActions = [
  {
    tips: '复制',
    action(item: AIMessage) {
      copyText(item.content);
      message.success('Copied');
    },
    icon: markRaw(CopyOutlined),
    show: () => true,
  },
  {
    tips: '重新生成',
    action(item: AIMessage) {
      msg.value = item.content;
      send();
    },
    icon: markRaw(ReloadOutlined),
    show(item: AIMessage) {
      return item.role === 'user';
    },
  },

  {
    tips: '删除',
    action(_: AIMessage, index: number) {
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

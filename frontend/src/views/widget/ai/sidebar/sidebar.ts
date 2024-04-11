import useAIStore from '@/store/AI/AI';
import type { Conversation } from '@/store/AI/types';
import { ClearOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';
import { useDateFormat, useNow } from '@vueuse/core';
import { Modal } from 'ant-design-vue';
import { nanoid } from 'nanoid';

const conversationObj: Conversation = {
  title: '',
  time: '',
  id: '',
  edit: false,
  messageList: [],
};
export const conversation = ref<Conversation>({
  ...conversationObj,
});

export const createSession = () => {
  const store = useAIStore();
  const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
  const id = nanoid();

  const newItem: Conversation = {
    title: `新建会话(${store.$state.conversation.list.length + 1})`,
    time: formatted.value,
    id,
    edit: false,
    messageList: [],
  };
  store.$state.conversation.list.push({
    ...newItem,
  });
  conversation.value = newItem;
};

export const menus = [
  {
    key: 'edit',
    icon: () => h(EditOutlined),
    label: '编辑',
    title: '编辑',
    action() {
      conversation.value.edit = true;
    },
  },

  {
    key: 'clear',
    icon: () => h(ClearOutlined),
    label: '清空',
    title: '清空',
    action() {
      Modal.confirm({
        title: '警告',
        content: `保留这个对话框，但会清空所有聊天记录`,
        onOk() {
          conversation.value.messageList = [];
        },
        centered: true,
      });
    },
  },
  {
    key: 'delete',
    icon: () => h(DeleteOutlined),
    label: '删除记录',
    title: '删除',
    action() {
      Modal.confirm({
        title: '警告',
        content: '将会删除所有信息,包括这个对话框',
        onOk() {
          const store = useAIStore();
          store.$state.conversation.list = store.$state.conversation.list.filter(e => {
            return e.id !== conversation.value.id;
          });
          conversation.value = {
            ...conversationObj,
          };
        },
        centered: true,
      });
    },
  },
];
export const clearAll = () => {
  Modal.confirm({
    title: '警告',
    centered: true,
    content: '将会失去所有会话信息,且无法找回',
    onOk() {
      const store = useAIStore();
      conversation.value = {
        ...conversationObj,
      };
      store.$state.conversation.list = [];
    },
  });
};

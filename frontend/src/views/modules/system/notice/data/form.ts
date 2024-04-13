export const noticeShowForm = ref(false);
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemNotice = {
  noticeId: 0,
  noticeTitle: '',
  noticeContent: '',
  status: '',
  createBy: '',
  updateBy: '',
  updateTime: null,
  remark: '',
  createTime: '',
  noticeType: '1',
};

export const noticeForm = ref<SystemNotice>({
  ...form,
});

export const noticeResetForm = () => {
  noticeForm.value = {
    ...form,
  };
};

export const noticeRules: Record<string, Rule[]> = {
  noticeId: [{ required: false, trigger: 'change' }],
  noticeTitle: [{ required: true, trigger: 'change' }],
  noticeType: [{ required: true, trigger: 'change' }],
  noticeContent: [{ required: false, trigger: 'change' }],
  status: [{ required: false, trigger: 'change' }],
  createBy: [{ required: false, trigger: 'change' }],
  createTime: [{ required: false, trigger: 'change' }],
  updateBy: [{ required: false, trigger: 'change' }],
  updateTime: [{ required: false, trigger: 'change' }],
  remark: [{ required: false, trigger: 'change' }],
};

import type { SystemNotice } from '@/api/modules/system/notice/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

export const noticeShowForm = ref(false);
const form: SystemNotice = {
  noticeId: 0,
  noticeTitle: '',
  noticeType: '',
  noticeContent: '',
  status: '0',
  createBy: '',
  createTime: null,
  updateBy: '',
  updateTime: null,
  remark: '',
};

// 当前选中的一项，用于删除，编辑
export const noticeForm = ref<SystemNotice>({
  ...form,
});

// 重置表格
export const noticeResetForm = () => {
  noticeForm.value = {
    ...form,
  };
};

// 表格校验
export const noticeRules: Record<string, Rule[]> = {
  noticeTitle: [{ required: true, trigger: 'change' }],
  noticeType: [{ required: true, trigger: 'change' }],
  noticeContent: [{ required: true, trigger: 'change' }],
  status: [{ required: false, trigger: 'change' }],
  remark: [{ required: false, trigger: 'change' }],
};

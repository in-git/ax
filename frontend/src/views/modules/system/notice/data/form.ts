export const showNoticeForm = ref(false);

const form: SystemNotice = {
  createBy: '',
  createTime: '',
  updateBy: '',
  remark: '',
  noticeId: 0,
  noticeTitle: '',
  noticeType: '1',
  noticeContent: '',
  status: '0',
};

export const noticeForm = ref<SystemNotice>({
  ...form,
});

export const resetNoticeForm = () => {
  noticeForm.value = {
    ...form,
  };
};

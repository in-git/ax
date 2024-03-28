export const showNoticeForm = ref(false);

const form: SystemNotice = {
  createBy: '',
  createTime: '',
  updateBy: '',
  remark: '',
  noticeId: 0,
  noticeTitle: '',
  noticeType: '',
  noticeContent: '',
  status: '',
};

export const noticeForm = ref<SystemNotice>({
  ...form,
});

export const resetNoticeForm = () => {
  noticeForm.value = {
    ...form,
  };
};

interface SystemNotice {
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime?: any;
  remark: string;
  noticeId: number;
  noticeTitle: string;
  noticeType: '1' | '2';
  noticeContent: string;
  status: string;
}

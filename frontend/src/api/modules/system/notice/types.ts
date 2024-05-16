export interface SystemNotice {
  noticeId: number;
  noticeTitle: string;
  noticeType: string;
  noticeContent: string;
  status: '0' | '1';
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  remark: string;
}

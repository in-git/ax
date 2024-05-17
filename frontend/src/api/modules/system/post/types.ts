export interface SystemPost {
  postId: number;
  postCode: string;
  postName: string;
  postSort: number;
  status: '0' | '1';
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  remark: string;
}

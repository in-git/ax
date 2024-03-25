export interface SystemPost {
  createBy: string;
  createTime: string;
  updateBy?: any;
  updateTime?: any;
  remark: string;
  postId: number;
  postCode: string;
  postName: string;
  postSort: number;
  status: string;
  flag: boolean;
}

export interface SystemMemo {
  memoId: number;
  title: string;
  value: string;
  description: string;
  extra: string;
  userId: number;
  deptId: number;
  createTime: string;
  updateTime: string;
  // 1：备忘录，2：记事本
  type: '1' | '2';
}

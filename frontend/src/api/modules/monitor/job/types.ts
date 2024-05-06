interface SystemJob {
  createBy: string;
  createTime: string;
  updateBy?: any;
  updateTime?: any;
  remark: string;
  jobId: number;
  jobName: string;
  jobGroup: string;
  invokeTarget: string;
  cronExpression: string;
  misfirePolicy: string;
  concurrent: string;
  status: string;
  nextValidTime: string;
}

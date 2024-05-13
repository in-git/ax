import { deleteJob, exportJob, fetchJobById, fetchJobList } from '@/api/modules/monitor/job/job';
import { response } from '@/utils/table/table';
import { jobForm, jobResetForm, jobShowForm } from './form';
import { jobKeys, jobQuery, jobTable } from './table';

export const jobList = async () => {
  try {
    jobTable.value.loading = true;
    const { data } = await fetchJobList(jobQuery.value);
    jobTable.value.data = data.rows;
    jobQuery.value.total = data.total;
    jobTable.value.loading = false;
  } catch (error) {
    jobTable.value.loading = false;
  }
};

export const jobEdit = async (id?: string) => {
  let targetId: string = id ? id : jobKeys.value[0];
  jobTable.value.loading = true;

  const { data } = await fetchJobById(targetId);
  if (data.data) {
    jobForm.value = data.data;
    jobShowForm.value = true;
  }
  jobTable.value.loading = false;
};

export const jobCreate = async () => {
  jobResetForm();
  jobShowForm.value = true;
};

export const jobDelete = async (id?: number) => {
  let ids = id ? [id] : jobKeys.value;
  await response(deleteJob, ids);
  await jobList();
  jobKeys.value = [];
};
// 导出EXCEL文件
export const jobExport = () => {
  return exportJob({
    pageNum: jobQuery.value.pageNum,
    pageSize: jobQuery.value.pageSize,
  });
};

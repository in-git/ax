import { deleteJob, fetchJobList, jobInfo } from '@/api/modules/monitor/job/job';
import { response } from '@/utils/table/table';
import { jobForm, jobShowForm, resetJobForm } from './form';
import { jobKeys, jobQuery, jobTable } from './table';

export const jobList = async () => {
  jobTable.value.loading = true;
  /* GET LIST */
  const { data } = await fetchJobList(jobQuery.value);
  jobTable.value.data = data.rows;
  jobQuery.value.total = data.total;
  jobTable.value.loading = false;
};

export const jobEdit = async (id?: number) => {
  const { data } = await jobInfo(jobForm.value.jobId);
  if (data.data) {
    jobForm.value = data.data;
    jobShowForm.value = true;
  }
};
export const jobCreate = async () => {
  resetJobForm();
  jobShowForm.value = true;
};
export const jobDelete = async (id?: number) => {
  let ids = id ? [id] : jobKeys.value;
  /* Delete ids */
  await response(deleteJob, ids);
  jobList();
};

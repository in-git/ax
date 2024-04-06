import type { IQuery, TableConfig } from '@/api/config/types';
import { jobRun } from '@/api/modules/monitor/job/job';
import { response } from '@/utils/table/table';
import { DeleteOutlined, PlaySquareOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { jobDelete } from './curd';
import { jobForm } from './form';

export const jobTable = ref<TableConfig>({
  rowKey: 'jobId',
  data: [],
  loading: false,
  moduleName: 'job',
});
interface jobQuery {}
export const jobQuery = ref<IQuery<jobQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const jobKeys = ref<number[]>([]);

export const jobOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    onClick() {
      response(jobDelete);
    },
  },
  {
    label: '执行一次',
    key: 'run',
    icon: h(PlaySquareOutlined),
    onClick() {
      if (jobForm.value.jobId)
        response(jobRun, {
          jobGroup: jobForm.value.jobGroup,
          jobId: jobForm.value.jobId,
        });
    },
  },
];

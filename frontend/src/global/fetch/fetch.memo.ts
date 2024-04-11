import { deptTree } from '@/api/modules/system/user/user';
import { useMemoize } from '@vueuse/core';

/* 全局拉取部门列表 */
export const getUserDeptTree = useMemoize(async () => await deptTree());

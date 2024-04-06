export const deptShowForm = ref(false);

const form: SystemDept = {
  createBy: '',
  createTime: '',
  deptId: 0,
  parentId: undefined,
  ancestors: '',
  deptName: '',
  orderNum: 0,
  leader: '',
  phone: '',
  email: '',
  status: '',
  delFlag: '',
  children: [],
};

export const deptForm = ref<SystemDept>({
  ...form,
});

export const deptResetForm = () => {
  deptForm.value = {
    ...form,
  };
};

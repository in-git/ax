import node from '@/api/config/node';

export const aiGen = (data: any) => {
  return node.post(`system/tool/aiGen`, data);
};

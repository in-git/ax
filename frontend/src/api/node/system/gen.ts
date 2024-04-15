import node from '@/api/config/node';

interface InterfaceParams {
  gptConfig: {
    model: string;
    stream: boolean;
    temperature: number;
    top_p: number;
    token: string;
    baseUrl: string;
  };
  tableConfig: {
    tableName: string;
    moduleName: string;
    serviceName: string;
    columns: any[];
  };
}
export const generateInterface = (data: InterfaceParams) => {
  return node.post(`system/tool/codeGeneration/interface`, data);
};
export const generateFiles = (data: InterfaceParams) => {
  return node.post(`system/tool/generateFiles`, data);
};

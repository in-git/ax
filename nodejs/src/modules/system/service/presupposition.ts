// 生成接口
export const generateInterface = (config: {
  tableName: string;
  columns: any[];
  moduleName: string;
  serviceName: string;
}): string => {
  return `

条件:
	--columnType 是数据的类型
	--columnName 是数据的键名
	--接口名和表名保持一致
	--每个接口字段要有中文注释
	--返回只需要返回TS代码
	表名:${config.tableName};
	模块名:${config.moduleName};
	业务名:${config.serviceName};
	字段:${JSON.stringify(config.columns)}

接口模板


import type { Response } from "@/api/config/types";
import axios from "axios";
import type { #{接口名} } from "./types";

export const fetch#{模块名}List = () => {
  return axios.get<Response<#{接口名}[]>>(\`#{模块名}/#{业务名}/list\`);
};

export const get#{模块名} = (id: number) => {
  return axios.get<Response<#{接口名}>>(\`#{模块名}/#{业务名}/#{id}\`);
};

export const delete{模块名} = (id: string) => {
  return axios.delete<Response>(\`#{模块名}/#{业务名}/#{id}\`);
};

export const update{模块名} = (data: #{接口名}) => {
  return axios.put<Response>(\`#{模块名}/#{业务名}\`, data);
};

export const create{模块名}= (data: #{接口名}) => {
  return axios.post<Response>(\`#{模块名}/#{业务名}\`, data);
};


生成JSON
	{
		types:string,//这里生成TS的接口
		columns:string,//这里生成ant-ui vue3的columns,只要title,dataIndex两个字段,title是中文
		api:string;//这里根据上面提供的数据和模板，结合生成
	}

`;
};

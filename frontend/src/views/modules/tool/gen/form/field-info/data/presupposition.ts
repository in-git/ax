export const generateInterface = (config: { tableName: string; columns: any[] }): string => {
  return `

前提:
	1.只返回ts接口,不需要任何提示
	2.根据提供的JSON类型生成对应的ts数据类型
	3.columnType是数据的类型
	4.columnName是数据的键名
	5.接口名和表名保持一致
	6.每个接口字段要有中文注释
根据提供的信息生成接口;
表名:${config.tableName};
字段:${JSON.stringify(config.columns)}
`;
};

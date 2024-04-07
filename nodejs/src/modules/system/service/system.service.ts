import axios from "axios";
import fs from "fs-extra";
import path from "path";
import { generateInterface } from "./presupposition";
import { GenerateInterface, GptResponse } from "./types";
/* AI生成接口 */
export const generatingInterface = async (params: GenerateInterface) => {
  const http = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${params.gptConfig.token}`,
    },
  });
  try {
    const { data } = await http.post<GptResponse>(
      `${params.gptConfig.baseUrl}`,
      {
        messages: [
          {
            role: "system",
            content: generateInterface({
              tableName: params.tableConfig.tableName,
              columns: params.tableConfig.columns,
              moduleName: params.tableConfig.moduleName,
              serviceName: params.tableConfig.serviceName,
            }),
          },
        ],
        model: params.gptConfig.model,
        stream: false,
        temperature: params.gptConfig.temperature,
        top_p: params.gptConfig.top_p,
      }
    );

    const content = data.choices[0].message.content
      .replace("```typescript", "")
      .replace("```", "");

    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

// 修改替换模板内容
/**
 * 1.生成API,接口文件
 * 2.生成表文件
 *   2-1.生成表头
 *   2-2.生成VUE文件
 */

export const generateFiles = async (params: GenerateInterface) => {
  /* 递归读取目录 */
  const readFilesRecursively = async (directoryPath: string) => {
    const files = fs.readdirSync(directoryPath);
    const promiseArr = files.map(async (file) => {
      const filePath = path.join(directoryPath, file);

      if (fs.statSync(filePath).isDirectory()) {
        readFilesRecursively(filePath); // 递归处理子目录
      } else {
        const fileContent = fs
          .readFileSync(filePath, "utf-8")
          .replaceAll(`__`, params.tableConfig.serviceName);
        await fs.writeFile(filePath, fileContent);
        console.log("File content:", filePath, fileContent.trim().length);
      }
    });
    await Promise.all(promiseArr);
  };

  /* 目录前缀 */
  const root = `E:/git/win/nodejs/src/assets/`;

  /* API的目录 */
  const modulePath = `${params.tableConfig.moduleName}/${params.tableConfig.serviceName}/`;

  /* 当前的根目录 */

  /* 资源目录 */
  const vueCopiedPath = path.join(__dirname, "./source/template/");
  const apiCopiedPath = path.join(__dirname, "./source/api/");

  /* 临时目录 */
  const vuePath = `${root}views/${modulePath}`;
  const apiPath = `${root}api/${modulePath}`;
  const data = await generatingInterface(params);

  if (!data) return;
  const { types, columns, api } = data;

  // 复制目录
  fs.copySync(vueCopiedPath, vuePath);

  fs.copySync(apiCopiedPath, apiPath);

  /* 修改types */

  fs.writeFileSync(apiPath + "types.ts", types);
  fs.writeFileSync(apiPath + "api.ts", api);
  fs.writeFileSync(vuePath + "data/columns.ts", columns);
  readFilesRecursively(root);

  return;
};

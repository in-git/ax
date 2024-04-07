import { successHandler } from "@/config/response";
import { Router } from "express";
import { generateFiles, generatingInterface } from "../service/system.service";

const router = Router();

/* 生成接口 */
router.post("/tool/codeGeneration/interface", async (req, res) => {
  const body = req.body;
  const result = await generatingInterface(body);
  successHandler(res, {
    data: `结果:${result}`,
  });
});
router.post("/tool/generateFiles", async (req, res) => {
  const body = req.body;
  await generateFiles(body);
  successHandler(res, {
    data: `result`,
  });
});
export default router;

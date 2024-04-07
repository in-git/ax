import { successHandler } from "@/config/response";
import { Router } from "express";

const router = Router();

router.post("/tool/aiGen", async (req, res) => {
  successHandler(res, {
    data: "test",
  });
});

export default router;

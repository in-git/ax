import { successHandler } from '@/config/response';
import { Router } from 'express';

const router = Router();

router.get('/test', async (req, res) => {
  successHandler(res, 'test');
});

export default router;

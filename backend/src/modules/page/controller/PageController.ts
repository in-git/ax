import { Router } from 'express';
import Page from '../bean/PageBean';
import { successHandler } from '@/config/response';

const router = Router();

router.get('/', (req, res) => {
  Page.Bean.sync({ force: true })
  successHandler(res, "success12");
});

export default router;

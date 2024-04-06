import { successHandler } from '@/config/response';
import axios from 'axios';
import { Router } from 'express';

const router = Router();

router.get('/wallpaper', async (req, res) => {
  const { pageNum, pageSize, cid } = req.query;
  const { data } = await axios.get(
    `https://wallpaper.ur1.fun/api/?cid=${cid}&start=${pageNum}&count=${pageSize}`,
  );
  successHandler(res, {
    data: data.data,
  });
});
router.get('/wallpaperTags', async (req, res) => {
  const { data } = await axios.get('https://wallpaper.ur1.fun/api/?cid=360tags');
  successHandler(res, {
    data: data.data,
  });
});

export default router;

import { Router } from 'express';
import { successHandler } from '@/config/response';
import { UserService } from '../service/PublicService';
import { Users } from '@/modules/user/bean/users';

const router = Router();

router.get('/login', async (req, res) => {
  const { name } = req.query
  const modal = new Users()
  modal.name = `${name}`
  modal.ip = `${(req.headers['x-forwarded-for']) || req.connection.remoteAddress}` ;
  await UserService.setUser(modal)
  successHandler(res, "成功添加");
});

export default router;

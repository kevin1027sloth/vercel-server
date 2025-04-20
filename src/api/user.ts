import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

// 获取所有用户 - 公开路由
router.get('/', (req: Request, res: Response): void => {
    // 实际应用中，这里会从数据库获取用户
    const users = [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' }
    ];
    
    res.json({ users });
  });


export default router;
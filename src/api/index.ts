
import express from 'express';
import userRoutes from './user';

const router = express.Router();

// 注册路由
router.use('/users', userRoutes);

// API根路径
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router;
// http://localhost:3000/api/users